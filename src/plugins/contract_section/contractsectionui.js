import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';

import FormView from './ui/formview';
import { SectionActionView } from './ui/actionsview';

export default class SectionUI extends Plugin {
	static get requires() {
		return [ContextualBalloon];
	}

	init() {
		const editor = this.editor;
		this.formView = this.createFormView();
		this.sectionActionView = this.createSectionActionView();
		this.panelView = new BalloonPanelView(editor.locale);
		this.balloon = editor.plugins.get(ContextualBalloon);
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
	}

	hideSectionUI() {
		this.panelView.content.clear();
		this.panelView.hide();
	}

	// TODO: check if the panel is empty then add
	addSectionActionView() {
		if (!this.isPanelInViewBody(this.panelView)) {
			this.editor.ui.view.body.add(this.panelView);
			this.editor.ui.focusTracker.add(this.panelView.element);

			clickOutsideHandler({
				emitter: this.sectionActionView,
				activator: () => this.isViewInContent(this.sectionActionView),
				contextElements: [this.panelView.element],
				callback: () => this.hideSectionUI()
			});
		}

		this.isPanelEmpty(this.panelView.content) &&
		!this.isViewInContent(this.sectionActionView)
			? this.panelView.content.add(this.sectionActionView)
			: null;

		this.panelView.pin(this.getSectionBalloonPositionData());
	}

	isPanelInViewBody(panelView) {
		return this.editor.ui.view.body.get(
			this.editor.ui.view.body.getIndex(panelView)
		);
	}

	isViewInContent(view) {
		return this.panelView.content.get(
			this.panelView.content.getIndex(view)
		);
	}

	isPanelEmpty(viewCollection) {
		return viewCollection.length === 0;
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

	// TODO: handle 'esc' key press
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
			this.hideSectionUI();
		});

		formView.keystrokes.set('Esc', (data, cancel) => {
			this.hideSectionUI();
			cancel();
		});

		return formView;
	}

	// TODO: check if form in panel
	addFormView() {
		// if (this.isFormInPanel()) {
		// 	return;
		// }
		const editor = this.editor;
		const changeTitleCommand = editor.commands.get('changeTitle');

		this.panelView.content.remove(this.sectionActionView);
		this.panelView.content.add(this.formView);
		this.panelView.pin(this.getSectionBalloonPositionData());
		this.formView.titleInputView.select();
		this.formView.titleInputView.element.value =
			changeTitleCommand.value || '';
	}

	removeFormView() {
		if (this.isFormInPanel()) {
			this.balloon.remove(this.formView);
			this.editor.editing.view.focus();
		}
	}

	startUpdatingSectionUI() {
		const editor = this.editor;
		let prevSelectedSection = this.getSelectedSectionElement();

		this.listenTo(editor.ui, 'update', () => {
			const selectedSectionElelemt = this.getSelectedSectionElement();

			if (prevSelectedSection && !selectedSectionElelemt) {
				this.hideSectionUI();
			} else {
				this.balloon.updatePosition(
					this.getSectionBalloonPositionData()
				);
			}
		});
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
