import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import boldIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/bold.svg';

export default class VariableStringUI extends Plugin {
	init() {
		this.createVariableStringToolbarButton();
	}

	createVariableStringToolbarButton() {
		const editor = this.editor;
		// TODO: add var string command
		const addVariableStringCommand = editor.commands.get('addVarString');
		const t = editor.t;

		// button name addVarString
		editor.ui.componentFactory.add('addVarString', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Add Variable String'),
				icon: boldIcon,
				tooltip: true
			});

			button.bind('isEnabled').to(addVariableStringCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addVarString');
			});

			return button;
		});
	}
}
