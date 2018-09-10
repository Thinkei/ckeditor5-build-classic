import View from '@ckeditor/ckeditor5-ui/src/view';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import bulletedlistIcon from '@ckeditor/ckeditor5-list/theme/icons/bulletedlist.svg';
import numberedlistIcon from '@ckeditor/ckeditor5-list/theme/icons/numberedlist.svg';

export default class ActionView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;

		this.changeTitleButtonView = this.createButton(
			t('Edit Title'),
			bulletedlistIcon,
			'editTitle'
		);

		this.setTemplate({
			tag: 'div',
			attributes: {
				class: ['ck', 'ck-link-actions'],
				tabindex: '-1'
			},
			children: [this.changeTitleButtonView]
		});
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

export class SectionActionView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;

		this.hideTitleButtonView = this.createButton(
			t('Hide Title'),
			numberedlistIcon,
			'toggle'
		);

		this.setTemplate({
			tag: 'div',
			attributes: {
				class: ['ck', 'ck-link-actions'],
				tabindex: '-1'
			},
			children: [this.hideTitleButtonView]
		});
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
