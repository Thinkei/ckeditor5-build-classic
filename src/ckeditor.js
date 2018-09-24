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
		editor.setData(
			`
			<contract_section hide_title="true" hide_title_in_document="false" id="818206" is_show="true" optional="false" premium="false"
			title="Logo">
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
					&nbsp;

					<p>Dear
						<variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="171548" initial_value="Recipient first name"
							required="true" variable_name="recipient_first_name" variable_type="String">recipient_first_name</variable_string>, 1</p>
					&nbsp;

					<p align="center">Welcome to
						<variable_string auto_populate="organisation_name" block_options="[]" help_text="" id="171556" initial_value="Company name"
							required="true" variable_name="company_name" variable_type="String">company_name</variable_string>
						<b>(Employer)</b>
					</p>
					&nbsp;

					<p>This contract sets out your terms of employment with the Employer.
						<br /> &nbsp;
					</p>

					<table border="1" cellpadding="1" cellspacing="1" style="width: 668px;">
						<tbody>
							<tr>
								<td style="width: 327px;">d&aacute;</td>
								<td style="width: 328px;">&aacute;d</td>
							</tr>
							<tr>
								<td style="width: 327px;">&aacute;d</td>
								<td style="width: 328px;">&aacute;d</td>
							</tr>
							<tr>
								<td style="width: 327px;">&aacute;dsda</td>
								<td style="width: 328px;">
									<g class="gr_ gr_284 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling" data-gr-id="284" id="284">ddddd</g>
								</td>
							</tr>
						</tbody>
					</table>
				</contract_block>
			</contract_section>
			<contract_section hide_title="true" hide_title_in_document="false" id="818207" is_show="true" optional="false" premium="false"
			title="Employment">
				<contract_block block_group="" id="2000929" optional="false" probation="false" visible="true">
					<p>
						<b>1. Employment</b>
					</p>
				</contract_block>
				<contract_block block_group="" id="2000930" optional="true" probation="false" visible="true">
					<p>1.1 You will be employed on a casual basis according to the needs of the Employer from time to time in the position of
						<variable_string auto_populate="recipient_job_title" block_options="[]" help_text="" id="171557" initial_value="Position"
							required="true" variable_name="position" variable_type="String">position</variable_string>. The terms of this contract shall apply on each and every occasion that you are engaged
						by the Employer to perform services, regardless of your position or the duties you perform, unless agreed otherwise
						in writing.</p>
				</contract_block>
				<contract_block block_group="" id="2000931" optional="true" probation="false" visible="true">
					<p>1.1 You will be employed on a casual basis in the position of
						<variable_string auto_populate="recipient_job_title" block_options="[]"
							help_text="" id="171557" initial_value="Position" required="true" variable_name="position" variable_type="String">position</variable_string> commencing on
						<variable_date auto_populate="recipient_start_date" block_options="[]" help_text=""
							id="171577" initial_value="Start Date" required="false" variable_name="Start Date" variable_type="Date">Start Date</variable_date>. The terms of this contract shall apply on each and every occasion that you are engaged
						by the Employer to perform services, regardless of your position or the duties you perform, unless agreed otherwise
						in writing.</p>
				</contract_block>
				<contract_block block_group="" id="2000932" optional="false" probation="false" visible="true">
					<p>The Employer may unilaterally change your title, duties, responsibilities, function, role accountability or reporting
						relationship at any time. This contract is not intended to give rise to an expectation or intention of an ongoing or
						continuous employment relationship.</p>
				</contract_block>
				<contract_block block_group="" id="2000933" optional="true" probation="false" visible="true">
					<p>1.2 Your employment is subject to the
						<variable_string auto_populate="" block_options="[]" help_text="" id="171569" initial_value="Insert name of Award or other Industrial Instrument"
							required="false" variable_name="instrument_name" variable_type="String">instrument_name</variable_string>, under which your classification is
						<variable_string auto_populate="" block_options="[]"
							help_text="" id="171570" initial_value="Insert name of classification" required="false" variable_name="instrument_classification"
							variable_type="String">instrument_classification</variable_string>, however the terms of this award are not intended to be given contractual
						effect by this contract.</p>
				</contract_block>
			</contract_section>
			<contract_section hide_title="true" hide_title_in_document="false" id="818208" is_show="true" optional="false" premium="false"
			title="Location">
				<contract_block block_group="" id="2000934" optional="false" probation="false" visible="true">
					<p>
						<b>2. Location</b>
					</p>
					&nbsp;

					<p>2.1 Your usual place of employment will initially be
						<variable_string auto_populate="recipient_location" block_options="[]"
							help_text="" id="171560" initial_value="Location" required="true" variable_name="location" variable_type="String">location</variable_string>, as well as any other location required to fulfil the duties of your position. You may at
						any time be required to work at a different location nominated by the Employer on either a temporary or permanent basis.</p>
				</contract_block>
			</contract_section>
			<contract_section hide_title="true" hide_title_in_document="false" id="818209" is_show="true" optional="false" premium="false"
			title="Hours">
				<contract_block block_group="" id="2000935" optional="false" probation="false" visible="true">
					<p>
						<b>3. Hours</b>
					</p>
					&nbsp;

					<p>3.1 As a casual employee you will not have reasonably predictable or regular hours of work, and you may be required to
						work at any time of the week including late nights, weekends and public holiday. The Employer will notify you when
						you are required to work from time to time.</p>
				</contract_block>
			</contract_section>
			`
		);
	})
	.catch(error => {
		console.error(error.stack);
	});
