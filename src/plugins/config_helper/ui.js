import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import noteIcon from '../../theme/icons/notes.svg';
import pencelIcon from '../../theme/icons/pencil.svg';
import stackIcon from '../../theme/icons/stack.svg';
import eyeIcon from '../../theme/icons/eye.svg';
import { createToolbarButton } from '../utils';
import {
	OnSaveCommamnd,
	OpenEditContractCommand,
	OpenVariableManagerCommand,
	OpenTutorialScreen
} from './commands';
import { isCommandExist } from './utils';

export default class AdditionalUI extends Plugin {
	init() {
		const editor = this.editor;
		if (isCommandExist(editor, 'onSave')) {
			createToolbarButton(editor, this, {
				commandName: 'onSave',
				buttonName: 'save',
				buttonLabel: 'Save (Ctrl + S)',
				icon: noteIcon
			});
		} else {
			editor.commands.add('onSave', new OnSaveCommamnd(editor));
			createToolbarButton(editor, this, {
				commandName: 'onSave',
				buttonName: 'save',
				buttonLabel: 'Save (Ctrl + S)',
				icon: noteIcon
			});
		}

		if (isCommandExist(editor, 'openEditContractCommand')) {
			createToolbarButton(editor, this, {
				commandName: 'openEditContractCommand',
				buttonName: 'openEditContractModal',
				buttonLabel: 'Open Edit Contract',
				icon: pencelIcon
			});
		} else {
			editor.commands.add(
				'openEditContractCommand',
				new OpenEditContractCommand(editor)
			);
			createToolbarButton(editor, this, {
				commandName: 'openEditContractCommand',
				buttonName: 'openEditContractModal',
				buttonLabel: 'Open Edit Contract',
				icon: pencelIcon
			});
		}

		if (isCommandExist(editor, 'openVariableManagerCommand')) {
			createToolbarButton(editor, this, {
				commandName: 'openVariableManagerCommand',
				buttonName: 'openVariableManagerSidebar',
				buttonLabel: 'Open Variable Manager',
				icon: stackIcon
			});
		} else {
			editor.commands.add(
				'openVariableManagerCommand',
				new OpenVariableManagerCommand(editor)
			);
			createToolbarButton(editor, this, {
				commandName: 'openVariableManagerCommand',
				buttonName: 'openVariableManagerSidebar',
				buttonLabel: 'Open Variable Manager',
				icon: stackIcon
			});
		}

		if (isCommandExist(editor, 'openTutorialScreen')) {
			createToolbarButton(editor, this, {
				commandName: 'openTutorialScreen',
				buttonName: 'openTutorialScreen',
				buttonLabel: 'Open Tutorial Screen',
				icon: eyeIcon
			});
		} else {
			editor.commands.add(
				'openTutorialScreen',
				new OpenTutorialScreen(editor)
			);
			createToolbarButton(editor, this, {
				commandName: 'openTutorialScreen',
				buttonName: 'openTutorialScreen',
				buttonLabel: 'Open Tutorial Screen',
				icon: eyeIcon
			});
		}
	}
}
