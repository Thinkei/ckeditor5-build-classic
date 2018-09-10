import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
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
	}

	showUI() {
		this.addActionView();
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
			this.removeFormView();
		});

		// this.listenTo(formView, 'cancel', () => {

		// })

		return formView;
	}

	removeFormView() {
		if (this.balloon.hasView(this.formView)) {
			this.balloon.remove(this.formView);
			this.editor.editing.view.focus();
		}
	}

	addFormView() {
		if (this.balloon.hasView(this.formView)) {
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
		console.log('add action');
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
}
