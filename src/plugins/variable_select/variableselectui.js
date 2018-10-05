import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

import { createToolbarButton } from '../utils';

export default class VariableSelectUI extends Plugin {
	init() {
		const editor = this.editor;
		createToolbarButton(editor, this, {
			commandName: 'addVarSelect',
			buttonName: 'addVarSelect',
			buttonLabel: 'Add Variable Select',
			icon: codeIcon
		});
	}
}
