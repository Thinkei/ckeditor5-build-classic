import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import BalloonPanelView from '@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import unlinkIcon from '@ckeditor/ckeditor5-link/theme/icons/unlink.svg';

import { ToggleCommand } from './contractblockcommand';
import BlockActionView from './ui/actionsview';
import BlockFormView from './ui/formview';
import { getSelectedBlockElement } from './utils';

export default class BlockUI extends Plugin {
	static get requires() {
		return [ContextualBalloon];
	}
	init() {
		const editor = this.editor;
		this.balloon = editor.plugins.get(ContextualBalloon);
		this.actionsView = this.createActionsView();
		this.formView = this.createFormView();
		this.createToolbarBlockButton();

		editor.editing.view.addObserver(ClickObserver);

		this.enableUserBallonInteractions();
	}

	// create form view
	createFormView() {
		const editor = this.editor;
		const editBlockGroupCommand = editor.commands.get('editBlockGroup');
		const blockFormView = new BlockFormView(editor.locale);

		blockFormView.inputView
			.bind('isReadOnly')
			.to(editBlockGroupCommand, 'isEnabled', value => !value);
		blockFormView.saveButtonView
			.bind('isEnabled')
			.to(editBlockGroupCommand, 'isEnabled');

		this.listenTo(blockFormView, 'submit', () => {
			editor.execute(
				'editBlockGroup',
				blockFormView.inputView.inputView.element.value
			);
			this.hideToolbar();
		});

		this.listenTo(blockFormView, 'cancel', () => {
			this.hideToolbar();
		});

		blockFormView.keystrokes.set('Esc', (data, cancel) => {
			this.hideToolbar();
			cancel();
		});

		return blockFormView;
	}

	// create actions view
	createActionsView() {
		const editor = this.editor;
		const toggleCommand = new ToggleCommand(editor);
		const blockActionView = new BlockActionView(editor.locale);
		blockActionView.toggleButtonView.bind('isEnabled').to(toggleCommand);

		this.listenTo(blockActionView, 'toggle', () => {
			editor.execute('toggle');
		});

		this.listenTo(blockActionView, 'editGroup', () => {
			this.addFormView();
		});

		return blockActionView;
	}

	// create Block button on toolbar
	createToolbarBlockButton() {
		const editor = this.editor;
		const addBlockCommand = editor.commands.get('addBlock');
		const t = editor.t;

		editor.ui.componentFactory.add('addBlock', locale => {
			const button = new ButtonView(locale);

			button.isEnabled = true;
			button.label = t('Add Block');
			button.icon = unlinkIcon;
			button.tooltip = true;

			// Bind button to the command
			button.bind('isEnabled').to(addBlockCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addBlock');
			});

			return button;
		});
	}

	enableUserBallonInteractions() {
		const editor = this.editor;
		const viewDocument = editor.editing.view.document;
		// BlockUI listen to 'click' event of View Document
		this.listenTo(viewDocument, 'click', () => {
			const selectedBlockElement = getSelectedBlockElement(
				editor,
				'view'
			);

			// show toolbar
			if (selectedBlockElement) {
				this.showToolbar();
			}
		});

		// Close the panel on the Esc key press when the editable has focus and the balloon is visible.
		this.editor.keystrokes.set('Esc', (data, cancel) => {
			if (this.isToolbarVisible) {
				this.hideToolbar();
				cancel();
			}
		});
		// Close on click outside of balloon panel element.
		clickOutsideHandler({
			emitter: this.actionsView,
			activator: () => this.isToolbarVisible,
			contextElements: [this.balloon.view.element],
			callback: () => this.hideToolbar()
		});
	}

	isToolbarVisible() {
		return this.balloon.hasView(this.actionsView);
	}

	// show Toolbar
	showToolbar() {
		// no block selected then returns
		if (!getSelectedBlockElement(this.editor, 'view')) {
			return null;
		} else {
			// add toolbar when there is a selected block
			this.addToolbars();
		}
		this.startUpdatingUI();
	}

	// hide Toolbar
	hideToolbar() {
		const editor = this.editor;
		const view = editor.editing.view;
		// update ui
		this.stopListening(editor.ui, 'update');
		// remove toolbars
		if (this.balloon.hasView(this.formView)) {
			this.balloon.remove(this.formView);
		}
		if (this.balloon.hasView(this.actionsView)) {
			this.balloon.remove(this.actionsView);
		}
		// remove highlight class by executing PostFixers loop
		view.change(writer => {
			view.document._callPostFixers(writer);
		});
		// make sure the focus always gets back to the main editable in case the focus is in another editable
		editor.editing.view.focus();
	}

	// start updating ui when there is a change on editor's ui
	startUpdatingUI() {
		const editor = this.editor;

		let prevSelectedBlock = getSelectedBlockElement(editor, 'view');

		this.listenTo(editor.ui, 'update', () => {
			const selectedBlock = getSelectedBlockElement(editor, 'view');

			if (prevSelectedBlock && !selectedBlock) {
				this.hideToolbar();
			} else {
				const balloonPosition = this.getBalloonPositionData();
				this.balloon.updatePosition(balloonPosition);
			}
			prevSelectedBlock = selectedBlock;
		});
	}

	// add form view
	addFormView() {
		if (this.balloon.hasView(this.formView)) {
			return;
		}

		this.balloon.add({
			view: this.formView,
			position: this.getBalloonPositionData()
		});

		this.formView.inputView.select();
	}

	// add toolbar to balloon's stack
	addToolbars() {
		// toolbar already exist then returns
		if (this.balloon.hasView(this.actionsView)) {
			return;
		}
		// add toolbar
		this.balloon.add({
			view: this.actionsView,
			position: this.getBalloonPositionData()
		});
	}

	// get position for inserting toolbar by mapping selected block from View to DOM
	getBalloonPositionData() {
		const view = this.editor.editing.view;
		const targetBlock = getSelectedBlockElement(editor, 'view');
		const positions = BalloonPanelView.defaultPositions;

		const target = targetBlock
			? view.domConverter.mapViewToDom(targetBlock)
			: null;
		return {
			target,
			positions: [
				positions.northWestArrowSouthWest,
				positions.southWestArrowNorthWest
			]
		};
	}
}
