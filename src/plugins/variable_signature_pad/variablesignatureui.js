import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import strikethroughIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/strikethrough.svg';

import { createVariableToolbarButton } from '../utils';

export default class VariableSignatureUI extends Plugin {
	init() {
		const editor = this.editor;
		createVariableToolbarButton(editor, this, {
			commandName: 'addVarSignature',
			buttonName: 'addVarSignature',
			buttonLabel: 'Add Variable Signature',
			icon: strikethroughIcon
		});
	}
}
