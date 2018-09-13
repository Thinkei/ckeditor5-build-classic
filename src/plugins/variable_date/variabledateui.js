import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import italicIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/italic.svg';

export default class VariableDateUI extends Plugin {
	init() {
		this.createVariableDateToolbarButton();
	}

	createVariableDateToolbarButton() {
		const editor = this.editor;
		// TODO: add var string command
		const addVariableDateCommand = editor.commands.get('addVarDate');
		const t = editor.t;

		// button name addVarString
		editor.ui.componentFactory.add('addVarDate', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Add Variable Date'),
				icon: italicIcon,
				tooltip: true
			});

			button.bind('isEnabled').to(addVariableDateCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addVarDate');
			});

			return button;
		});
	}
}
