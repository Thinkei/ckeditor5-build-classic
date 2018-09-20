import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { defineSchema } from '../../schema';
import { addConverterHelpers } from '../../helpers';

// this plugin helps us to define some configurations (schema, converter helper...).
export default class CustomConfig extends Plugin {
	static get pluginName() {
		return 'CustomConfig';
	}

	init() {
		const editor = this.editor;
		defineSchema(editor);
		addConverterHelpers(editor);
	}
}
