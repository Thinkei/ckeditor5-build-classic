import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import BlockEditing from './contractblockediting';
import BlockUI from './contractblockui';
import './styles.css';

export default class ContractBlock extends Plugin {
	static get requires() {
		return [BlockEditing, BlockUI];
	}

	static get pluginName() {
		return 'BlockPlugin';
	}
}
