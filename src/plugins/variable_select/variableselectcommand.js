import Command from '@ckeditor/ckeditor5-core/src/command';

import { addVariable } from '../utils';

export class AddVarSelectCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		addVariable('Select', this.editor);
	}
}
