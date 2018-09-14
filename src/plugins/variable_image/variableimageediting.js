import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { AddVarImageCommand } from './variableimagecommand';

export default class VariableImageEditing extends Plugin {
	init() {
		const editor = this.editor;

		editor.commands.add('addVarImage', new AddVarImageCommand(editor));
	}
}
