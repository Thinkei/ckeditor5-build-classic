import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { AddVarSelectCommand } from './variableselectcommand';

export default class VariableStringEditing extends Plugin {
	init() {
		const editor = this.editor;

		editor.commands.add('addVarSelect', new AddVarSelectCommand(editor));
	}
}
