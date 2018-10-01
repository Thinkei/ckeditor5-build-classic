import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import boldIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/bold.svg';

import { createToolbarButton } from '../utils';

export default class VariableStringUI extends Plugin {
	init() {
		const editor = this.editor;
		createToolbarButton(editor, this, {
			commandName: 'addVarString',
			buttonName: 'addVarString',
			buttonLabel: 'Add Variable String',
			icon: boldIcon
		});
	}
}
