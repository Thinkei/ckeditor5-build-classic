import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import underlineIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/underline.svg';

export default class VariableImageUI extends Plugin {
	init() {
		this.createVariableImageToolbarButton();
	}

	createVariableImageToolbarButton() {
		const editor = this.editor;
		const addVariableImageCommand = editor.commands.get('addVarImage');
		const t = editor.t;

		// button name addVarString
		editor.ui.componentFactory.add('addVarImage', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Add Variable Image'),
				icon: underlineIcon,
				tooltip: true
			});

			button.bind('isEnabled').to(addVariableImageCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addVarImage');
			});

			return button;
		});
	}
}
