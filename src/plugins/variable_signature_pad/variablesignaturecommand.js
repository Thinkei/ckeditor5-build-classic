import Command from '@ckeditor/ckeditor5-core/src/command';

import { addVariable } from '../utils';

export class AddVarSignatureCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		addVariable('signature_pad', this.editor);
	}
}
