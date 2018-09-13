import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VariableSelectEditing from './variableselectediting';
import VariableSelectUI from './variableselectui';

export default class VariableSelect extends Plugin {
	static get requires() {
		return [VariableSelectEditing, VariableSelectUI];
	}

	static get pluginName() {
		return 'VariableSelect';
	}
}
