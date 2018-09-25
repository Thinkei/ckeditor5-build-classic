import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VariableSignatureEditing from './variablesignatureediting';
import VariableSignatureUI from './variablesignatureui';
import './styles.css';

export default class VariableSignature extends Plugin {
	static get requires() {
		return [VariableSignatureEditing, VariableSignatureUI];
	}

	static get pluginName() {
		return 'VariableSignature';
	}
}
