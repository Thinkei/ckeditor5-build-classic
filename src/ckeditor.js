// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import CustomConfig from './plugins/config_helper';
import ContractBlock from './plugins/contract_block';
import ContractSection from './plugins/contract_section';
import VariableSelect from './plugins/variable_select';
import VariableDate from './plugins/variable_date';
import VariableSignature from './plugins/variable_signature_pad';
import VariableImage from './plugins/variable_image';
import VariableString from './plugins/variable_string';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	EasyImage,
	Heading,
	Image,
	ImageToolbar,
	ImageCaption,
	ImageStyle,
	ImageUpload,
	Link,
	List,
	Paragraph,
	CustomConfig,
	ContractSection,
	ContractBlock,
	VariableString,
	VariableImage,
	VariableSelect,
	VariableDate,
	VariableSignature
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'undo',
			'redo',
			'addBlock',
			'addVarString',
			'addVarImage',
			'addVarSelect',
			'addVarDate',
			'addVarSignature'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

ClassicEditor.create(document.querySelector('#editor'))
	.then(editor => {
		window.editor = editor;
		editor.keystrokes.set('Ctrl+S', (evt, cancel) => {
			editor.execute('onSave');
			cancel();
		});
		editor.setData(
			`
			<contract_section hide_title="false" hide_title_in_document="false" id="818206" is_show="true" optional="false" premium="false"
			title="Logo">
				<contract_block block_group="" id="2000928" optional="false" probation="false" visible="true">
				<p>
				<variable_image auto_populate="" block_options="[]" help_text="" id="171559" initial_value="Logo" required="true" variable_name="logo"
					variable_type="Image">logo</variable_image>
				This text is just for testing
			</p>
			<contract_block block_group="" id="2000928" optional="true" probation="false" visible="true">
			<p>
			<variable_image auto_populate="" block_options="[]" help_text="" id="171559" initial_value="Logo" required="true" variable_name="logo"
				variable_type="Image">logo</variable_image>
		</p>
		&nbsp;
		<p>
			<variable_date auto_populate="" block_options="[]" help_text="" id="171568" initial_value="Date of Letter" required="false"
				variable_name="letter_date" variable_type="Date">letter_date</variable_date>
		</p>
		&nbsp;
		<p>
			<variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="171548" initial_value="Recipient first name"
				required="true" variable_name="recipient_first_name" variable_type="String">recipient_first_name</variable_string>
			<variable_string auto_populate="recipient_last_name" block_options="[]" help_text=""
				id="171549" initial_value="Recipient last name" required="true" variable_name="recipient_last_name" variable_type="String">recipient_last_name</variable_string>
			<br />
			<variable_string auto_populate="recipient_address_line_1" block_options="[]" help_text="" id="171554" initial_value="Recipient address one"
				required="true" variable_name="recipient_address_one" variable_type="String">recipient_address_one</variable_string>
			<br />
			<variable_string auto_populate="recipient_address_city" block_options="[]" help_text="" id="171565" initial_value="Suburb"
				required="false" variable_name="suburb" variable_type="String">suburb</variable_string>
			<variable_string auto_populate="recipient_address_state" block_options="[]" help_text="" id="171566"
				initial_value="State" required="false" variable_name="State" variable_type="String">State</variable_string>
			<variable_string auto_populate="recipient_address_postcode" block_options="[]" help_text=""
				id="171567" initial_value="Postcode" required="false" variable_name="postcode" variable_type="String">postcode</variable_string>
		</p>

		&nbsp;
		<p>
			<variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="171548" initial_value="Recipient first name"
				required="true" variable_name="recipient_first_name" variable_type="String">recipient_first_name</variable_string>
			<variable_string auto_populate="recipient_last_name" block_options="[]" help_text=""
				id="171549" initial_value="Recipient last name" required="true" variable_name="recipient_last_name" variable_type="String">recipient_last_name</variable_string>
			<br />
			<variable_string auto_populate="recipient_address_line_1" block_options="[]" help_text="" id="171554" initial_value="Recipient address one"
				required="true" variable_name="recipient_address_one" variable_type="String">recipient_address_one</variable_string>
			<br />
			<variable_string auto_populate="recipient_address_city" block_options="[]" help_text="" id="171565" initial_value="Suburb"
				required="false" variable_name="suburb" variable_type="String">suburb</variable_string>
			<variable_string auto_populate="recipient_address_state" block_options="[]" help_text="" id="171566"
				initial_value="State" required="false" variable_name="State" variable_type="String">State</variable_string>
			<variable_string auto_populate="recipient_address_postcode" block_options="[]" help_text=""
				id="171567" initial_value="Postcode" required="false" variable_name="postcode" variable_type="String">postcode</variable_string>
		</p>
			</contract_block>
			<contract_block block_group="" id="2000928" optional="false" probation="false" visible="true">
			<p>
			<variable_image auto_populate="" block_options="[]" help_text="" id="171559" initial_value="Logo" required="true" variable_name="logo"
				variable_type="Image">logo</variable_image>
		</p>
		&nbsp;
		<p>
			<variable_date auto_populate="" block_options="[]" help_text="" id="171568" initial_value="Date of Letter" required="false"
				variable_name="letter_date" variable_type="Date">letter_date</variable_date>
		</p>
		&nbsp;
			<p>
				<variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="171548" initial_value="Recipient first name"
					required="true" variable_name="recipient_first_name" variable_type="String">recipient_first_name</variable_string>
				<variable_string auto_populate="recipient_last_name" block_options="[]" help_text=""
					id="171549" initial_value="Recipient last name" required="true" variable_name="recipient_last_name" variable_type="String">recipient_last_name</variable_string>
				<br />
				<variable_string auto_populate="recipient_address_line_1" block_options="[]" help_text="" id="171554" initial_value="Recipient address one"
					required="true" variable_name="recipient_address_one" variable_type="String">recipient_address_one</variable_string>
				<br />
				<variable_string auto_populate="recipient_address_city" block_options="[]" help_text="" id="171565" initial_value="Suburb"
					required="false" variable_name="suburb" variable_type="String">suburb</variable_string>
				<variable_string auto_populate="recipient_address_state" block_options="[]" help_text="" id="171566"
					initial_value="State" required="false" variable_name="State" variable_type="String">State</variable_string>
				<variable_string auto_populate="recipient_address_postcode" block_options="[]" help_text=""
					id="171567" initial_value="Postcode" required="false" variable_name="postcode" variable_type="String">postcode</variable_string>
			</p>
				</contract_block>
			</contract_section>
			<contract_section hide_title="false" hide_title_in_document="false" id="811996" is_show="true" optional="false" premium="false"
			title="Early Bird">
			</contract_section>
			`
		);
	})
	.catch(error => {
		console.error(error.stack);
	});
