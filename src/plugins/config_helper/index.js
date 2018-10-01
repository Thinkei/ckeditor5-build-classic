import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import AdditionalUI from './ui';
import AdditionalEditing from './editing';

// this plugin helps us to define some configurations (schema, converter helper...).
export default class CustomConfig extends Plugin {
	static get requires() {
		return [AdditionalUI, AdditionalEditing];
	}
	static get pluginName() {
		return 'CustomConfig';
	}
}
