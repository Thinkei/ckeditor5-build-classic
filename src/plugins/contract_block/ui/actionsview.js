import View from '@ckeditor/ckeditor5-ui/src/view';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';
import pencelIcon from '../../../theme/icons/pencil.svg';
import preferenceIcon from '../../../theme/icons/preferences.svg';

export default class BlockActionView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;
		// TODO: add our own custom name and icon
		this.toggleButtonView = this.createButton(
			t('Toggle'),
			preferenceIcon,
			'toggle'
		);

		this.editGroupView = this.createButton(
			t('Edit Block Group'),
			pencelIcon,
			'editGroup'
		);

		this.setTemplate({
			tag: 'div',
			attributes: {
				class: ['ck', 'ck-link-actions'],
				tabindex: '-1'
			},
			children: [this.toggleButtonView, this.editGroupView]
		});

		this.keystrokes = new KeystrokeHandler();
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
