import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import saveIcon from '../../theme/icons/floppy-disk.svg';
import editIcon from '../../theme/icons/d-edit.svg';
import appIcon from '../../theme/icons/app.svg';
import questionIcon from '../../theme/icons/question.svg';
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
				icon: saveIcon
			});
		} else {
			editor.commands.add('onSave', new OnSaveCommamnd(editor));
			createToolbarButton(editor, this, {
				commandName: 'onSave',
				buttonName: 'save',
				buttonLabel: 'Save (Ctrl + S)',
				icon: saveIcon
			});
		}

		if (isCommandExist(editor, 'openEditContractCommand')) {
			createToolbarButton(editor, this, {
				commandName: 'openEditContractCommand',
				buttonName: 'openEditContractModal',
				buttonLabel: 'Open Edit Contract',
				icon: editIcon
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
				icon: editIcon
			});
		}

		if (isCommandExist(editor, 'openVariableManagerCommand')) {
			createToolbarButton(editor, this, {
				commandName: 'openVariableManagerCommand',
				buttonName: 'openVariableManagerSidebar',
				buttonLabel: 'Open Variable Manager',
				icon: appIcon
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
				icon: appIcon
			});
		}

		if (isCommandExist(editor, 'openTutorialScreen')) {
			createToolbarButton(editor, this, {
				commandName: 'openTutorialScreen',
				buttonName: 'openTutorialScreen',
				buttonLabel: 'Open Tutorial Screen',
				icon: questionIcon
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
				icon: questionIcon
			});
		}
	}
}
