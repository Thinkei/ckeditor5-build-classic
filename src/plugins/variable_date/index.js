import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VariableDateEditing from './variabledataediting';
import VariableDateUI from './variabledateui';
import './styles.css';

export default class VariableString extends Plugin {
	static get requires() {
		return [VariableDateEditing, VariableDateUI];
	}

	static get pluginName() {
		return 'VariableDate';
	}
}
