import Command from '@ckeditor/ckeditor5-core/src/command';

import { addVariable } from '../utils';

export class AddVarStringCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		addVariable('string', this.editor);
	}
}
