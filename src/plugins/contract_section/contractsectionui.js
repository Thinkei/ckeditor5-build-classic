import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import linkIcon from '@ckeditor/ckeditor5-link/theme/icons/link.svg';

export default class SectionUI extends Plugin {
	init() {
		this.createToolbarSectionButton();
	}

	createToolbarSectionButton() {
		const editor = this.editor;
		const hideTitleCommand = editor.commands.get('hideTitle');
		const t = editor.t;

		editor.ui.componentFactory.add('hideTitle', locale => {
			const button = new ButtonView(locale);

			button.set({
				isEnabled: true,
				label: t('Hide Title'),
				icon: linkIcon
			});

			// bind button state to command
			button.bind('isEnabled').to(hideTitleCommand, 'isEnabled');

			// TODO: define callback function
			this.listenTo(button, 'execute', () => {
				editor.execute('hideTitle');
			});

			return button;
		});
	}
}
