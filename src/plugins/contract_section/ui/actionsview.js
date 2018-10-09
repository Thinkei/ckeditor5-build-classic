import View from '@ckeditor/ckeditor5-ui/src/view';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';
import pencelIcon from '../../../theme/icons/pencil.svg';
import preferenceIcon from '../../../theme/icons/preferences.svg';
import cogwheelIcon from '../../../theme/icons/cogwheel.svg';

export class SectionActionView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;

		this.keystrokes = new KeystrokeHandler();

		this.hideTitleButtonView = this.createButton(
			t('Hide Title'),
			cogwheelIcon,
			'hideTitle'
		);

		this.editTitleButtonView = this.createButton(
			t('Edit Title'),
			pencelIcon,
			'edit'
		);

		this.toggleOptionalButtonView = this.createButton(
			t('Optional'),
			preferenceIcon,
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
