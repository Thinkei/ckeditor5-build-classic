import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import SectionEditing from './contractsectionediting';
import SectionUI from './contractsectionui';

export default class ContractSection extends Plugin {
	static get requires() {
		return [SectionEditing, SectionUI];
	}

	static get pluginName() {
		return 'ContractSection';
	}
}
