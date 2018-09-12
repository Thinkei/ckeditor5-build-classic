import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { AddVarStringCommand } from './variablestringcommand';

export default class VariableStringEditing extends Plugin {
	init() {
		const editor = this.editor;

		editor.commands.add('addVarString', new AddVarStringCommand(editor));
	}
}
