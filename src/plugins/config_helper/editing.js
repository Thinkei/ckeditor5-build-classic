import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { defineSchema } from '../../schema';
import { addConverterHelpers } from '../../helpers';
import {
	OnSaveCommamnd,
	OpenEditContractCommand,
	OpenVariableManagerCommand,
	OpenTutorialScreen,
	UseVariableCommand
} from './commands';
import { isCommandExist } from './utils';

export default class AditionalEditing extends Plugin {
	init() {
		const editor = this.editor;
		defineSchema(editor);
		addConverterHelpers(editor);

		editor.commands.add('useVariable', new UseVariableCommand(editor));

		if (!isCommandExist(editor, 'openEditContractCommand'))
			editor.commands.add(
				'openEditContractCommand',
				new OpenEditContractCommand(editor)
			);

		if (!isCommandExist(editor, 'onSave'))
			editor.commands.add('onSave', new OnSaveCommamnd(editor));

		if (!isCommandExist(editor, 'openVariableManagerCommand'))
			editor.commands.add(
				'openVariableManagerCommand',
				new OpenVariableManagerCommand(editor)
			);

		if (!isCommandExist(editor, 'openTutorialScreen'))
			editor.commands.add(
				'openTutorialScreen',
				new OpenTutorialScreen(editor)
			);
	}
}
