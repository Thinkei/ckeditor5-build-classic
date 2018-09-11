import View from '@ckeditor/ckeditor5-ui/src/view';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';
import bulletedlistIcon from '@ckeditor/ckeditor5-list/theme/icons/bulletedlist.svg';
import numberedlistIcon from '@ckeditor/ckeditor5-list/theme/icons/numberedlist.svg';
import linkIcon from '@ckeditor/ckeditor5-link/theme/icons/link.svg';

export class SectionActionView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;

		this.keystrokes = new KeystrokeHandler();

		this.hideTitleButtonView = this.createButton(
			t('Hide Title'),
			numberedlistIcon,
			'hideTitle'
		);

		this.editTitleButtonView = this.createButton(
			t('Edit Title'),
			bulletedlistIcon,
			'edit'
		);

		this.toggleOptionalButtonView = this.createButton(
			t('Optional'),
			linkIcon,
			'toggleOptional'
		);

		this.setTemplate({
			tag: 'div',
			attributes: {
				class: ['ck', 'ck-link-actions'],
				tabindex: '-1'
			},
			children: [
				this.hideTitleButtonView,
				this.editTitleButtonView,
				this.toggleOptionalButtonView
			]
		});
	}

	render() {
		super.render();
	}

	createButton(label, icon, eventName) {
		const button = new ButtonView(this.locale);

		button.set({
			label,
			icon,
			tooltip: true
		});

		button.delegate('execute').to(this, eventName);

		return button;
	}
}
