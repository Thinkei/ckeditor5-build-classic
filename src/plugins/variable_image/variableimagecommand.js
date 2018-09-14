import Command from '@ckeditor/ckeditor5-core/src/command';

import { addVariable } from '../utils';

export class AddVarImageCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		addVariable('image', this.editor);
	}
}
