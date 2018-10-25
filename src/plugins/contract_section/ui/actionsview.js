import View from '@ckeditor/ckeditor5-ui/src/view';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import KeystrokeHandler from '@ckeditor/ckeditor5-utils/src/keystrokehandler';
import editIcon from '../../../theme/icons/d-edit.svg';
import gearIcon from '../../../theme/icons/gear.svg';
import eyeIcon from '../../../theme/icons/eye (1).svg';

export class SectionActionView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;

		this.keystrokes = new KeystrokeHandler();

		this.hideTitleButtonView = this.createButton(
			t('Hide/Show Title'),
			eyeIcon,
			'hideTitle'
		);

		this.editTitleButtonView = this.createButton(
			t('Edit Title'),
			editIcon,
			'edit'
		);

		this.toggleOptionalButtonView = this.createButton(
			t('Optional'),
			gearIcon,
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
