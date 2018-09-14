import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import boldIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/bold.svg';

export default class VariableSignatureUI extends Plugin {
	init() {
		this.createVariableSignatureToolbarButton();
	}

	createVariableSignatureToolbarButton() {
		const editor = this.editor;
		const addVariableStringCommand = editor.commands.get('addVarSignature');
		const t = editor.t;

		// button name addVarSignature
		editor.ui.componentFactory.add('addVarSignature', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Add Variable Signature'),
				icon: boldIcon,
				tooltip: true
			});

			button.bind('isEnabled').to(addVariableStringCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addVarSignature');
			});

			return button;
		});
	}
}
