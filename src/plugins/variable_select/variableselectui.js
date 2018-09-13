import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import codeIcon from '@ckeditor/ckeditor5-basic-styles/theme/icons/code.svg';

export default class VariableStringUI extends Plugin {
	init() {
		this.createVariableSelectToolbarButton();
	}

	createVariableSelectToolbarButton() {
		const editor = this.editor;
		const addVariableSelectCommand = editor.commands.get('addVarSelect');
		const t = editor.t;

		// button name addVarSelect
		editor.ui.componentFactory.add('addVarSelect', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Add Variable Select'),
				icon: codeIcon,
				tooltip: true
			});

			button.bind('isEnabled').to(addVariableSelectCommand, 'isEnabled');

			this.listenTo(button, 'execute', () => {
				editor.execute('addVarSelect');
			});

			return button;
		});
	}
}
