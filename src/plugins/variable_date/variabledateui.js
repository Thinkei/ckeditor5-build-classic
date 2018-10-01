import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import italicIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/italic.svg';

import { createToolbarButton } from '../utils';

export default class VariableDateUI extends Plugin {
	init() {
		const editor = this.editor;
		createToolbarButton(editor, this, {
			commandName: 'addVarDate',
			buttonName: 'addVarDate',
			buttonLabel: 'Add Variable Date',
			icon: italicIcon
		});
	}
}
