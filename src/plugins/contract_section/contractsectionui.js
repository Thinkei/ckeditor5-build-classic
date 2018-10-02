import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';

import FormView from './ui/formview';
import { SectionActionView } from './ui/actionsview';
import { EhPanel } from '../../components/panel';

export default class SectionUI extends Plugin {
	init() {
		const editor = this.editor;
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
			const selectedSectionElelemt = this.getSelectedSectionElement();

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

	getSelectedSectionElement() {
		const selection = this.editor.editing.view.document.selection;
		return this.findSectionElement(selection.getFirstPosition());
	}

	findSectionElement(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => {
				return this.isSectionElement(ancestor);
			});
	}

	isSectionElement(node) {
		return (
			node.is('containerElement', 'section') &&
			node.getCustomProperty('sectionElement')
		);
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
		const view = this.editor.editing.view;
		const targetSection = this.getSelectedSectionElement();
		const positions = BalloonPanelView.defaultPositions;

		const target = targetSection
			? view.domConverter.mapViewToDom(targetSection)
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
			.bind('isEnabled')
			.to(hideTitleCommand, 'isEnabled');

		sectionActionView.toggleOptionalButtonView
			.bind('isEnabled')
			.to(toggleOptionalCommand, 'isEnabled');

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
		formView.saveButtonView.bind('isEnabled').to(changeTitleCommand);

		this.listenTo(formView, 'submit', () => {
			editor.execute(
				'changeTitle',
				formView.titleInputView.inputView.element.value
			);
			this.hideSectionUI();
		});

		this.listenTo(formView, 'cancel', () => {
			if (this.EhBalloon.hasView(this.sectionFormView)) {
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
		let prevSelectedSection = this.getSelectedSectionElement();

		this.listenTo(editor.ui, 'update', () => {
			const selectedSectionElelemt = this.getSelectedSectionElement();

			if (prevSelectedSection && !selectedSectionElelemt) {
				this.hideSectionUI();
			} else {
				this.EhBalloon.updatePosition(
					this.getSectionBalloonPositionData()
				);
			}
		});
	}
}
