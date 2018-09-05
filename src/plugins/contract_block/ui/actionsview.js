import View from '@ckeditor/ckeditor5-ui/src/view';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import unlinkIcon from '@ckeditor/ckeditor5-link/theme/icons/unlink.svg';

export default class BlockActionView extends View {
	constructor(locale) {
		super(locale);

		const t = locale.t;

		// set onservable attribute for identify block node
		// this.set('optional');
		// TODO: add our own custom name and icon
		this.toggleButtonView = this.createButton(
			t('Toggle'),
			unlinkIcon,
			'toggle'
		);

		this.setTemplate({
			tag: 'div',

			attributes: {
				class: ['ck', 'ck-link-actions'],
				tabindex: '-1'
			},

			children: [this.toggleButtonView]
		});
	}

	createButton(label, icon, eventName) {
		const button = new ButtonView(this.locale);

		button.set({
			label,
			icon
		});

		button.delegate('execute').to(this, eventName);

		return button;
	}
}
