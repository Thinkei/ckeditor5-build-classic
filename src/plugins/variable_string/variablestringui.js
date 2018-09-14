import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import boldIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/bold.svg';

import { createVariableToolbarButton } from '../utils';

export default class VariableStringUI extends Plugin {
	init() {
		const editor = this.editor;
		createVariableToolbarButton(editor, this, {
			commandName: 'addVarString',
			buttonName: 'addVarString',
			buttonLabel: 'Add Variable String',
			icon: boldIcon
		});
	}
}
