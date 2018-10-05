import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

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
				icon: codeIcon
			});
		} else {
			editor.commands.add('onSave', new OnSaveCommamnd(editor));
			createToolbarButton(editor, this, {
				commandName: 'onSave',
				buttonName: 'save',
				buttonLabel: 'Save (Ctrl + S)',
				icon: codeIcon
			});
		}

		if (isCommandExist(editor, 'openEditContractCommand')) {
			createToolbarButton(editor, this, {
				commandName: 'openEditContractCommand',
				buttonName: 'openEditContractModal',
				buttonLabel: 'Open Edit Contract',
				icon: codeIcon
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
				icon: codeIcon
			});
		}

		if (isCommandExist(editor, 'openVariableManagerCommand')) {
			createToolbarButton(editor, this, {
				commandName: 'openVariableManagerCommand',
				buttonName: 'openVariableManagerSidebar',
				buttonLabel: 'Open Variable Manager',
				icon: codeIcon
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
				icon: codeIcon
			});
		}

		if (isCommandExist(editor, 'openTutorialScreen')) {
			createToolbarButton(editor, this, {
				commandName: 'openTutorialScreen',
				buttonName: 'openTutorialScreen',
				buttonLabel: 'Open Tutorial Screen',
				icon: codeIcon
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
				icon: codeIcon
			});
		}
	}
}
