import View from '@ckeditor/ckeditor5-ui/src/view';
import ViewCollection from '@ckeditor/ckeditor5-ui/src/viewcollection';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import LabeledInputView from '@ckeditor/ckeditor5-ui/src/labeledinput/labeledinputview';
import InputTextView from '@ckeditor/ckeditor5-ui/src/inputtext/inputtextview';
import submitHandler from '@ckeditor/ckeditor5-ui/src/bindings/submithandler';
import checkIcon from '@ckeditor/ckeditor5-core/theme/icons/check.svg';
import cancelIcon from '@ckeditor/ckeditor5-core/theme/icons/cancel.svg';

export default class FormView extends View {
	constructor(locale) {
		super(locale);
		const t = locale.t;

		this.titleInputView = this.createTitleInput();

		this.saveButtonView = this.createButton(
			t('Save'),
			checkIcon,
			'ck-button-save'
		);
		this.saveButtonView.type = 'submit';

		this.cancelButtonView = this.createButton(
			t('Cancel'),
			cancelIcon,
			'ck-button-cancel',
			'cancel'
		);

		this.setTemplate({
			tag: 'form',
			attributes: {
				class: ['ck', 'ck-link-form'],
				tabindex: '-1'
			},
			children: [
				this.titleInputView,
				this.saveButtonView,
				this.cancelButtonView
			]
		});
	}

	render() {
		super.render();

		submitHandler({
			view: this
		});
	}

	createTitleInput() {
		const t = this.locale.t;

		const labeledInput = new LabeledInputView(this.locale, InputTextView);
		labeledInput.label = t('Section Title');

		return labeledInput;
	}

	createButton(label, icon, className, eventName) {
		const button = new ButtonView(this.locale);

		button.set({
			label,
			icon,
			tooltip: true
		});

		button.extendTemplate({
			attributes: {
				class: className
			}
		});

		if (eventName) {
			button.delegate('execute').to(this, eventName);
		}

		return button;
	}
}
