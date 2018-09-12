import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VariableStringEditing from './variablestringediting';
import VariableStringUI from './variablestringui';
import './styles.css';

export default class ContractBlock extends Plugin {
	static get requires() {
		return [VariableStringEditing, VariableStringUI];
	}

	static get pluginName() {
		return 'VariableString';
	}
}
