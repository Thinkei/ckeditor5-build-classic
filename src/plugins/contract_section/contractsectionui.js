import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';
import linkIcon from '@ckeditor/ckeditor5-link/theme/icons/link.svg';

import FormView from './ui/formview';
import ActionView from './ui/actionsview';

export default class SectionUI extends Plugin {
	static get requires() {
		return [ContextualBalloon];
	}

	init() {
		const editor = this.editor;
		this.formView = this.createFormView();
		this.actionView = this.createActionView();
		this.balloon = editor.plugins.get(ContextualBalloon);
		editor.editing.view.addObserver(ClickObserver);

		this.enableEditingSectionTitle();
		this.createToolbarSectionButton();
	}

	enableEditingSectionTitle() {
		const editor = this.editor;
		const viewDocument = editor.editing.view.document;

		this.listenTo(viewDocument, 'click', () => {
			const selectedSectionTitle = this.getSelectedSectionTitle();

			if (selectedSectionTitle) {
				this.showUI();
			}
		});

		this.editor.keystrokes.set('Esc', cancel => {
			if (this.areUIsVisible) {
				this.hideUI();
				cancel();
			}
		});

		clickOutsideHandler({
			emitter: this.formView,
			activator: () => this.areUIsVisible,
			contextElements: [this.balloon.view.element],
			callback: () => this.hideUI()
		});
	}

	showUI() {
		this.addActionView();
	}

	hideUI() {
		if (!this.areUIsInPanel) {
			return;
		}

		const editor = this.editor;

		this.stopListening(editor.ui, 'update');

		this.removeFormView();

		this.balloon.remove(this.actionView);

		editor.editing.view.focus();
	}

	getSelectedSectionTitle() {
		const selection = this.editor.editing.view.document.selection;
		return this.findSelectionAncestor(selection.getFirstPosition());
	}

	findSelectionAncestor(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => this.isSectionTitle(ancestor));
	}

	isSectionTitle(node) {
		return (
			node.is('containerElement', 'p') &&
			node.hasAttribute('section_title')
		);
	}

	createToolbarSectionButton() {
		const editor = this.editor;
		const hideTitleCommand = editor.commands.get('hideTitle');
		const t = editor.t;

		editor.ui.componentFactory.add('hideTitle', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Hide Title'),
				icon: linkIcon
			});

			// bind button state to command
			button.bind('isEnabled').to(hideTitleCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('hideTitle');
			});

			return button;
		});
	}

	createActionView() {
		const editor = this.editor;
		const actionView = new ActionView(editor.locale);

		// TODO: define callback execute showing change title form
		this.listenTo(actionView, 'editTitle', () => {
			this.addFormView();
		});

		return actionView;
	}

	createFormView() {
		const editor = this.editor;
		const formView = new FormView(editor.locale);
		const changeTitleCommand = editor.commands.get('changeTitle');

		formView.titleInputView
			.bind('isReadOnly')
			.to(changeTitleCommand, 'isEnabled', value => !value);
		formView.saveButtonView.bind('isEnabled').to(changeTitleCommand);

		this.listenTo(formView, 'submit', () => {
			editor.execute(
				'changeTitle',
				formView.titleInputView.inputView.element.value
			);
			this.hideUI();
		});

		this.listenTo(formView, 'cancel', () => {
			this.hideUI();
		});

		formView.keystrokes.set('Esc', cancel => {
			this.hideUI();
			cancel();
		});

		return formView;
	}

	removeFormView() {
		if (this.isFormInPanel()) {
			this.balloon.remove(this.formView);
			this.editor.editing.view.focus();
		}
	}

	addFormView() {
		if (this.isFormInPanel()) {
			return;
		}
		const editor = this.editor;
		const changeTitleCommand = editor.commands.get('changeTitle');

		this.balloon.add({
			view: this.formView,
			position: this.getBalloonPositionData()
		});

		this.formView.titleInputView.select();
		this.formView.titleInputView.element.value =
			changeTitleCommand.value || '';
	}

	addActionView() {
		if (this.balloon.hasView(this.actionView)) {
			return;
		}

		this.balloon.add({
			view: this.actionView,
			position: this.getBalloonPositionData()
		});
	}

	getBalloonPositionData() {
		const view = this.editor.editing.view;
		const targetBlock = this.getSelectedSectionTitle();

		const target = targetBlock
			? view.domConverter.mapViewToDom(targetBlock)
			: null;

		return {
			target
		};
	}

	areUIsInPanel() {
		return this.isFormInPanel || this.areActionsInPanel;
	}

	isFormInPanel() {
		return this.balloon.hasView(this.formView);
	}

	areActionsInPanel() {
		return this.balloon.hasView(this.actionView);
	}

	areUIsVisible() {
		const visibleView = this.balloon.visibleView;

		return visibleView == this.formView || this.areActionsVisible;
	}

	areActionsVisible() {
		return this.balloon.visibleView === this.actionView;
	}
}
