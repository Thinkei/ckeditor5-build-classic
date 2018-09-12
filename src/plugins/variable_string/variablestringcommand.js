import Command from '@ckeditor/ckeditor5-core/src/command';

export class AddVarStringCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		console.log('add var string');
	}
}
