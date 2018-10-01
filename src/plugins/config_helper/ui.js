import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

import { createToolbarButton } from '../utils';
import { OnSaveCommamnd, OpenEditContractCommand } from './commands';
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
	}
}
