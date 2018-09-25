import Command from '@ckeditor/ckeditor5-core/src/command';

import { addVariable } from '../utils';

export class AddVarDateCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		addVariable('date', this.editor);
	}
}
