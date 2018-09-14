import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { AddVarDateCommand } from './variabledatecommand';

export default class VariableDateEditing extends Plugin {
	init() {
		const editor = this.editor;

		editor.commands.add('addVarDate', new AddVarDateCommand(editor));
	}
}
