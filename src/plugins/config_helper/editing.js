import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { defineSchema } from '../../schema';
import { addConverterHelpers } from '../../helpers';
import { OnSaveCommamnd } from './commands';

export default class AditionalEditing extends Plugin {
	init() {
		const editor = this.editor;
		defineSchema(editor);
		addConverterHelpers(editor);

		if (!editor.commands.get('onSave'))
			this.editor.commands.add('onSave', new OnSaveCommamnd(editor));
	}
}
