import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

import FormView from './ui/formview';
import { SectionActionView } from './ui/actionsview';
import { EhPanel } from '../../components/panel';
import { getSelectedSectionElement } from './utils';

export default class SectionUI extends Plugin {
	init() {
		const editor = this.editor;
		this.createToolbarSectionButton();
		this.sectionFormView = this.createFormView();
		this.sectionActionView = this.createSectionActionView();
		this.EhBalloon = new EhPanel(editor);
		editor.editing.view.addObserver(ClickObserver);

		this.enableUserSectionInteraction();
	}

	enableUserSectionInteraction() {
		const editor = this.editor;
		const viewDocument = editor.editing.view.document;

		this.listenTo(viewDocument, 'click', () => {
			const selectedSectionElelemt = getSelectedSectionElement(
				editor,
				'view'
			);

			if (selectedSectionElelemt) {
				this.showSectionUI();
			}
		});

		clickOutsideHandler({
			emitter: this.sectionActionView,
			activator: () => {
				return (
					this.EhBalloon.hasView(this.sectionActionView) ||
					this.EhBalloon.hasView(this.sectionFormView)
				);
			},
			contextElements: [this.EhBalloon.panel.element],
			callback: () => this.hideSectionUI()
		});

		this.editor.keystrokes.set('Esc', (data, cancel) => {
			this.hideSectionUI();
			cancel();
		});
	}

	showSectionUI() {
		this.addSectionActionView();
		this.startUpdatingSectionUI();
	}

	hideSectionUI() {
		const editor = this.editor;
		// update ui
		this.stopListening(editor.ui, 'update');
		// remove toolbars
		if (this.EhBalloon.hasView(this.sectionActionView)) {
			this.EhBalloon.remove(this.sectionActionView);
		}
		if (this.EhBalloon.hasView(this.sectionFormView)) {
			this.EhBalloon.remove(this.sectionFormView);
		}
		// make sure the focus always gets back to the main editable in case the focus is in another editable
		editor.editing.view.focus();
	}

	addSectionActionView() {
		if (this.EhBalloon.hasView(this.sectionActionView)) {
			return;
		}
		this.EhBalloon.add({
			view: this.sectionActionView,
			position: this.getSectionBalloonPositionData()
		});
	}

	getSectionBalloonPositionData() {
		const editor = this.editor;
		const targetSection = getSelectedSectionElement(editor, 'view');
		const positions = BalloonPanelView.defaultPositions;

		const target = targetSection
			? editor.editing.view.domConverter.mapViewToDom(targetSection)
			: null;

		return {
			target,
			positions: [
				positions.southEastArrowNorthWest,
				positions.northEastArrowSouthEast
			]
		};
	}

	createSectionActionView() {
		const editor = this.editor;
		const sectionActionView = new SectionActionView(editor.locale);
		const hideTitleCommand = editor.commands.get('hideTitle');
		const toggleOptionalCommand = editor.commands.get('toggleOptional');

		sectionActionView.hideTitleButtonView
			.bind('isEnabled', 'isOn')
			.to(hideTitleCommand, 'isEnabled', 'value');

		sectionActionView.toggleOptionalButtonView
			.bind('isEnabled', 'isOn')
			.to(toggleOptionalCommand, 'isEnabled', 'value');

		this.listenTo(sectionActionView, 'hideTitle', () => {
			editor.execute('hideTitle');
		});

		this.listenTo(sectionActionView, 'toggleOptional', () => {
			editor.execute('toggleOptional');
		});

		this.listenTo(sectionActionView, 'edit', () => {
			this.addFormView();
		});

		return sectionActionView;
	}

	createFormView() {
		const editor = this.editor;
		const formView = new FormView(editor.locale);
		const changeTitleCommand = editor.commands.get('changeTitle');

		formView.titleInputView
			.bind('isReadOnly')
			.to(changeTitleCommand, 'isEnabled', value => !value);
		formView.titleInputView.bind('value').to(changeTitleCommand, 'value');

		formView.saveButtonView.bind('isEnabled').to(changeTitleCommand);

		this.listenTo(formView, 'submit', () => {
			editor.execute(
				'changeTitle',
				formView.titleInputView.inputView.element.value
			);
			this.hideSectionUI();
		});

		this.listenTo(formView, 'cancel', () => {
			if (this.EhBalloon.visibleView() === this.sectionFormView) {
				this.EhBalloon.remove(this.sectionFormView);
			}
		});

		formView.keystrokes.set('Esc', (data, cancel) => {
			this.hideSectionUI();
			cancel();
		});

		return formView;
	}

	addFormView() {
		if (this.EhBalloon.hasView(this.sectionFormView)) {
			return;
		}
		const editor = this.editor;
		const changeTitleCommand = editor.commands.get('changeTitle');

		this.EhBalloon.add({
			view: this.sectionFormView,
			position: this.getSectionBalloonPositionData()
		});

		this.sectionFormView.titleInputView.select();
		this.sectionFormView.titleInputView.element.value =
			changeTitleCommand.value || '';
	}

	startUpdatingSectionUI() {
		const editor = this.editor;
		let prevSelectedSection = getSelectedSectionElement(editor, 'view');

		this.listenTo(editor.ui, 'update', () => {
			const selectedSectionElelemt = getSelectedSectionElement(
				editor,
				'view'
			);

			if (prevSelectedSection && !selectedSectionElelemt) {
				this.hideSectionUI();
			} else {
				this.EhBalloon.updatePosition(
					this.getSectionBalloonPositionData()
				);
			}
		});
	}

	createToolbarSectionButton() {
		const editor = this.editor;
		const addSectionCommand = editor.commands.get('addSection');
		const t = editor.t;

		editor.ui.componentFactory.add('addSection', locale => {
			const button = new ButtonView(locale);

			button.isEnabled = true;
			button.label = t('Add Section');
			button.icon = codeIcon;
			button.tooltip = true;

			// Bind button to the command
			button.bind('isEnabled').to(addSectionCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addSection');
			});
			return button;
		});
	}
}
