import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { AddVarSignatureCommand } from './variablesignaturecommand';

export default class VariableSignatureEditing extends Plugin {
	init() {
		const editor = this.editor;

		editor.commands.add(
			'addVarSignature',
			new AddVarSignatureCommand(editor)
		);
	}
}
