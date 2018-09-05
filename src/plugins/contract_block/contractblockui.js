import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver';
import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon';
import clickOutsideHandler from '@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import unlinkIcon from '@ckeditor/ckeditor5-link/theme/icons/unlink.svg';

import { ToggleCommand } from './contractblockcommand';
import BlockActionView from './ui/actionsview';
import { getSelectedBlockElement } from './utils';

export default class BlockUI extends Plugin {
	static get requires() {
		return [ContextualBalloon];
	}
	init() {
		const editor = this.editor;

		this.balloon = editor.plugins.get(ContextualBalloon);
		this.actionsView = this.createActionsView();
		this.createToolbarBlockButton();

		editor.editing.view.addObserver(ClickObserver);

		this.enableUserBallonInteractions();
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
		this.editor.keystrokes.set('Esc', cancel => {
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

	// create actions view
	createActionsView() {
		const editor = this.editor;
		const toggleCommand = new ToggleCommand(editor);
		const blockActionView = new BlockActionView(editor.locale);
		blockActionView.toggleButtonView.bind('isEnabled').to(toggleCommand);

		this.listenTo(blockActionView, 'toggle', () => {
			editor.execute('toggle');
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

			// Bind button to the command
			button.bind('isEnabled').to(addBlockCommand, 'isEnabled');

			// TODO: define callback function
			this.listenTo(button, 'execute', () => {
				editor.execute('addBlock');
			});

			return button;
		});
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
		this.balloon.remove(this.actionsView);
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

	// add toolbar to balloon's stack
	addToolbars() {
		// toolbar already exist then returns
		if (this.isToolbarVisible) {
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

		const target = targetBlock
			? view.domConverter.mapViewToDom(targetBlock)
			: null;

		return {
			target
		};
	}

	// check if actions view already exists
	get isToolbarVisible() {
		return this.balloon.visibleView === this.actionsView;
	}
}
