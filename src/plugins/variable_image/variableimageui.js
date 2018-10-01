import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import underlineIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/underline.svg';

import { createToolbarButton } from '../utils';

export default class VariableImageUI extends Plugin {
	init() {
		const editor = this.editor;
		createToolbarButton(editor, this, {
			commandName: 'addVarImage',
			buttonName: 'addVarImage',
			buttonLabel: 'Add Variable Image',
			icon: underlineIcon
		});
	}
}
