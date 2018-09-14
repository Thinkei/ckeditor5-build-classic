import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import VariableImageEditing from './variableimageediting';
import VariableImageUI from './variableimageui';
import './styles.css';

export default class VariableImage extends Plugin {
	static get requires() {
		return [VariableImageEditing, VariableImageUI];
	}

	static get pluginName() {
		return 'VariableImage';
	}
}
