import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

import { createVariableToolbarButton } from '../utils';

export default class VariableSelectUI extends Plugin {
	init() {
		const editor = this.editor;
		createVariableToolbarButton(editor, this, {
			commandName: 'addVarSelect',
			buttonName: 'addVarSelect',
			buttonLabel: 'Add Variable Select',
			icon: codeIcon
		});
	}
}
