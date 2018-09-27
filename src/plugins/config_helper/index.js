import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { defineSchema } from '../../schema';
import { addConverterHelpers } from '../../helpers';
import { OnSaveCommamnd } from './commands';

const ON_SAVE_KEYSTROKES = 'Ctrl+S';

// this plugin helps us to define some configurations (schema, converter helper...).
export default class CustomConfig extends Plugin {
	static get pluginName() {
		return 'CustomConfig';
	}

	init() {
		const editor = this.editor;
		defineSchema(editor);
		addConverterHelpers(editor);

		editor.commands.add('onSave', new OnSaveCommamnd(editor));

		editor.keystrokes.set(ON_SAVE_KEYSTROKES, () => {
			editor.execute('onSave');
		});
	}
}
