import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BoldEditing from './boldediting';
import BoldUI from './boldui';

/**
 * The bold feature.
 *
 * It loads the {@link module:basic-styles/bold/boldediting~BoldEditing bold editing feature}
 * and {@link module:basic-styles/bold/boldui~BoldUI bold UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Bold extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [BoldEditing, BoldUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'BoldEditing';
	}
}
