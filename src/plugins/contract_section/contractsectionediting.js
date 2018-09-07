import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { HideTitleCommand, ChangeTitleCommand } from './contractsectioncommand';

export default class SectionEditing extends Plugin {
	init() {
		const editor = this.editor;

		// create commads for section
		editor.commands.add('hideTitle', new HideTitleCommand(editor));
		editor.commands.add('changeTitle', new ChangeTitleCommand(editor));
	}
}
