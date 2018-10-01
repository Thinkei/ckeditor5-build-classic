import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { defineSchema } from '../../schema';
import { addConverterHelpers } from '../../helpers';
import { OnSaveCommamnd, OpenEditContractCommand } from './commands';
import { isCommandExist } from './utils';

export default class AditionalEditing extends Plugin {
	init() {
		const editor = this.editor;
		defineSchema(editor);
		addConverterHelpers(editor);

		if (!isCommandExist(editor, 'openEditContractCommand'))
			editor.commands.add(
				'openEditContractCommand',
				new OpenEditContractCommand(editor)
			);

		if (!isCommandExist(editor, 'onSave'))
			editor.commands.add('onSave', new OnSaveCommamnd(editor));
	}
}
