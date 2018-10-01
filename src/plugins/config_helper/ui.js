import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

import { createToolbarButton } from '../utils';
import { OnSaveCommamnd } from './commands';

export default class AdditionalUI extends Plugin {
	init() {
		const editor = this.editor;
		if (editor.commands.get('onSave')) {
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
	}
}
