// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import UnderLine from '@ckeditor/ckeditor5-basic-styles/src/underline';
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
import EhList from './plugins/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import CustomConfig from './plugins/config_helper';
import ContractBlock from './plugins/contract_block';
import ContractSection from './plugins/contract_section';
import './styles.css';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	UnderLine,
	BlockQuote,
	EasyImage,
	Heading,
	Image,
	ImageToolbar,
	ImageCaption,
	ImageStyle,
	ImageUpload,
	Link,
	// List,
	EhList,
	Paragraph,
	Table,
	TableToolbar,
	CustomConfig,
	ContractSection,
	ContractBlock
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontsize',
			'fontfamily',
			'|',
			'bold',
			'italic',
			'underline',
			'link',
			'bulletedList',
			'numberedList',
			'alignment',
			'|',
			'imageUpload',
			'insertTable',
			'|',
			'blockQuote',
			'undo',
			'redo',
			'|',
			'save',
			'openEditContractModal',
			'openVariableManagerSidebar',
			'openTutorialScreen',
			'addBlock',
			'addSection'
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
	table: {
		toolbar: ['tableColumn', 'tableRow', '|', 'mergeTableCells']
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

ClassicEditor.create(document.querySelector('#editor'))
	.then(editor => {
		window.editor = editor;
		editor.keystrokes.set('Ctrl+S', (data, cancel) => {
			editor.execute('onSave');
			cancel();
		});
		editor.setData(`
		<contract_section hide_title="true" hide_title_in_document="false" id="1160836" is_show="true" optional="false" premium="false" title="Logo"><contract_block block_group="" id="2837477" optional="false" probation="false" visible="true">
		<p><variable_image auto_populate="" block_options="[]" help_text="" id="171559" initial_value="Logo" required="true" variable_name="logo" variable_type="Image">logo</variable_image></p>
		&nbsp;

		<p><variable_date auto_populate="" block_options="[]" help_text="" id="171568" initial_value="Date of Letter" required="false" variable_name="letter_date" variable_type="Date">letter_date</variable_date></p>
		&nbsp;

		<p><variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="171548" initial_value="Recipient first name" required="true" variable_name="recipient_first_name" variable_type="String">recipient_first_name</variable_string> <variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="171549" initial_value="Recipient last name" required="true" variable_name="recipient_last_name" variable_type="String">recipient_last_name</variable_string></p>

		<p><variable_string auto_populate="recipient_address_line_1" block_options="[]" help_text="" id="171554" initial_value="Recipient address one" required="true" variable_name="recipient_address_one" variable_type="String">recipient_address_one</variable_string><br />
		<variable_string auto_populate="recipient_address_city" block_options="[]" help_text="" id="171565" initial_value="Suburb" required="false" variable_name="suburb" variable_type="String">suburb</variable_string> <variable_string auto_populate="recipient_address_state" block_options="[]" help_text="" id="171566" initial_value="State" required="false" variable_name="State" variable_type="String">State</variable_string> <variable_string auto_populate="recipient_address_postcode" block_options="[]" help_text="" id="171567" initial_value="Postcode" required="false" variable_name="postcode" variable_type="String">postcode</variable_string></p>
		&nbsp;

		<p>Dear <variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="171548" initial_value="Recipient first name" required="true" variable_name="recipient_first_name" variable_type="String">recipient_first_name</variable_string>, 1</p>
		&nbsp;

		<p align="center">Welcome to <variable_string auto_populate="organisation_name" block_options="[]" help_text="" id="171556" initial_value="Company name" required="true" variable_name="company_name" variable_type="String">company_name</variable_string> <b>(Employer)</b></p>
		&nbsp;

		<p>This contract sets out your terms of employment with the Employer.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160837" is_show="true" optional="false" premium="false" title="Employment"><contract_block block_group="" id="2837478" optional="false" probation="false" visible="true">
		<p><b>1. Employment</b></p>
		</contract_block><contract_block block_group="" id="2837479" optional="true" probation="false" visible="true">
		<p>1.1 You will be employed on a casual basis according to the needs of the Employer from time to time in the position of <variable_string auto_populate="recipient_job_title" block_options="[]" help_text="" id="171557" initial_value="Position" required="true" variable_name="position" variable_type="String">position</variable_string>. The terms of this contract shall apply on each and every occasion that you are engaged by the Employer to perform services, regardless of your position or the duties you perform, unless agreed otherwise in writing.</p>
		</contract_block><contract_block block_group="" id="2837480" optional="true" probation="false" visible="true">
		<p>1.1 You will be employed on a casual basis in the position of <variable_string auto_populate="recipient_job_title" block_options="[]" help_text="" id="171557" initial_value="Position" required="true" variable_name="position" variable_type="String">position</variable_string> commencing on <variable_date auto_populate="recipient_start_date" block_options="[]" help_text="" id="171577" initial_value="Start Date" required="false" variable_name="Start Date" variable_type="Date">Start Date</variable_date>. The terms of this contract shall apply on each and every occasion that you are engaged by the Employer to perform services, regardless of your position or the duties you perform, unless agreed otherwise in writing.</p>
		</contract_block><contract_block block_group="" id="2837481" optional="false" probation="false" visible="true">
		<p>The Employer may unilaterally change your title, duties, responsibilities, function, role accountability or reporting relationship at any time. This contract is not intended to give rise to an expectation or intention of an ongoing or continuous employment relationship.</p>
		</contract_block><contract_block block_group="" id="2837482" optional="true" probation="false" visible="true">
		<p>1.2 Your employment is subject to the <variable_string auto_populate="" block_options="[]" help_text="" id="171569" initial_value="Insert name of Award or other Industrial Instrument" required="false" variable_name="instrument_name" variable_type="String">instrument_name</variable_string>, under which your classification is <variable_string auto_populate="" block_options="[]" help_text="" id="171570" initial_value="Insert name of classification" required="false" variable_name="instrument_classification" variable_type="String">instrument_classification</variable_string>, however the terms of this award are not intended to be given contractual effect by this contract.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160838" is_show="true" optional="false" premium="false" title="Location"><contract_block block_group="" id="2837483" optional="false" probation="false" visible="true">
		<p><b>2. Location</b></p>
		&nbsp;

		<p>2.1 Your usual place of employment will initially be <variable_string auto_populate="recipient_location" block_options="[]" help_text="" id="171560" initial_value="Location" required="true" variable_name="location" variable_type="String">location</variable_string>, as well as any other location required to fulfil the duties of your position. You may at any time be required to work at a different location nominated by the Employer on either a temporary or permanent basis.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160839" is_show="true" optional="false" premium="false" title="Hours"><contract_block block_group="" id="2837484" optional="false" probation="false" visible="true">
		<p><b>3. Hours</b></p>
		&nbsp;

		<p>3.1 As a casual employee you will not have reasonably predictable or regular hours of work, and you may be required to work at any time of the week including late nights, weekends and public holiday. The Employer will notify you when you are required to work from time to time.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160840" is_show="true" optional="false" premium="false" title="Hourly Rate of Remuneration"><contract_block block_group="" id="2837485" optional="true" probation="false" visible="true">
		<p><b>4. Hourly Rate of Remuneration</b></p>
		&nbsp;

		<p>4.1 You will be paid a gross hourly casual rate for time worked (less applicable taxation) of $<variable_string auto_populate="recipient_salary" block_options="[]" help_text="" id="171558" initial_value="Hourly Rate" required="true" variable_name="wage" variable_type="String">wage</variable_string>, inclusive of any applicable casual loading.</p>
		</contract_block><contract_block block_group="" id="2837486" optional="true" probation="false" visible="true">
		<p>4.2 You may also receive other payments, or higher hourly rates of pay for work performed at particular times.</p>
		</contract_block><contract_block block_group="" id="2837487" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837488" optional="true" probation="false" visible="true">
		<p>4.2 You may also receive other payments, or higher hourly rates of pay for work performed at particular times. This includes:</p>
		&nbsp;

		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="Insert any specific rates such as weekend rates, etc, that employer wants to commit to within this contract" id="171571" initial_value="Insert any additional entitlements" required="false" variable_name="additonal_remuneration_1" variable_type="String">additonal_remuneration_1</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837489" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837490" optional="true" probation="false" visible="true">
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="Insert any specific rates such as weekend rates, etc, that employer wants to commit to within this contract" id="171572" initial_value="Insert any additional entitlements" required="false" variable_name="additonal_remuneration_2" variable_type="String">additonal_remuneration_2</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837491" optional="true" probation="false" visible="true">
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="Insert any specific rates such as weekend rates, etc, that employer wants to commit to within this contract" id="171573" initial_value="Insert any additional entitlements" required="false" variable_name="additonal_remuneration_3" variable_type="String">additonal_remuneration_3</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837492" optional="false" probation="false" visible="true">
		<p>4.3 All payments made to you by the Employer throughout your employment (regardless of whether they are expressly referred to or guaranteed by this contract) compensate for and set-off to the fullest extent possible all combined benefits or entitlements you have under any applicable industrial instrument or law. This includes, without limitation, payment for all hours worked, any minimum wage, payment for minimum periods of engagement, overtime, penalty rates for weekend work or public holiday work, shift and overtime allowances, meal allowances, annual leave loading and any other allowances and loadings to which you may otherwise be entitled.</p>
		&nbsp;

		<p>Where the combined monetary value of all such benefits or entitlements exceed the combined monetary value of all payments actually made to you, the Employer&rsquo;s further payment obligations shall be limited to the difference between those two combined amounts.</p>
		&nbsp;

		<p>4.4 You will be paid <variable_select auto_populate="" block_options="[{&quot;id&quot;:22402,&quot;option&quot;:&quot;monthly&quot;},{&quot;id&quot;:22401,&quot;option&quot;:&quot;fortnightly&quot;},{&quot;id&quot;:22400,&quot;option&quot;:&quot;weekly&quot;}]" help_text="" id="171574" initial_value="Insert payment frequency" required="false" variable_name="payment_frequency" variable_type="Select">payment_frequency</variable_select> in arrears by electronic funds transfer into your nominated bank or building society account after deduction of all taxes, levies, and personal superannuation contributions. The Employer may unilaterally amend the frequency of payment at any time by providing you with notice in writing.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160841" is_show="true" optional="false" premium="false" title="Superannuation"><contract_block block_group="" id="2837493" optional="false" probation="false" visible="true">
		<p><b>5. Superannuation</b></p>
		&nbsp;

		<p>5.1 In addition to payments made directly to you, the Employer will make contributions to superannuation on your behalf as required by law.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160842" is_show="true" optional="false" premium="false" title="Expenses"><contract_block block_group="" id="2837494" optional="false" probation="false" visible="true">
		<p><b>6. Expenses</b></p>
		&nbsp;

		<p>6.1 You will be reimbursed for all reasonable out-of-pocket business expenses incurred in the proper performance of your duties that are authorised in advance by the Employer and supported by appropriate receipts, subject to the terms of any applicable workplace policy.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160843" is_show="true" optional="false" premium="false" title="Duties and responsibilities"><contract_block block_group="" id="2837495" optional="false" probation="false" visible="true">
		<p><b>7. Duties and responsibilities</b></p>
		&nbsp;

		<p>7.1 During your employment you must:</p>

		<ul><br />
			<li>devote the whole of your time, attention and skill during working hours to performing your duties;</li>
			<li>perform the duties reasonably required or directed by the Employer from time to time, irrespective of which position you hold;</li>
			<li>follow and comply with all reasonable and lawful directions given to you by the Employer;</li>
			<li>be faithful and diligent, and actively pursue the Employer&rsquo;s best interests at all times;</li>
			<li>not compete, directly or indirectly, with the Employer;</li>
			<li>not, in connection with your employment with the Employer, accept any financial or other benefit except from the Employer, unless such benefit is disclosed to the Employer and it expressly permits you to accept it;</li>
			<li>not conduct yourself in a manner, whether during or after work hours, that causes damage or potential damage to the Employer&rsquo;s property or reputation;</li>
			<li>not use internet, email or voicemail at the Employer&rsquo;s workplace for excessive personal use, to view or distribute offensive or illegal material, or in any manner not consistent with the Employer&rsquo;s workplace policies; and</li>
			<li>not unlawfully discriminate against, sexually harass or bully another person in any manner related to your employment or the Employer&rsquo;s business.</li>
		</ul>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160844" is_show="true" optional="false" premium="false" title="Leave"><contract_block block_group="" id="2837496" optional="false" probation="false" visible="true">
		<p><b>8. Leave</b></p>
		&nbsp;

		<p>8.1 You are entitled to leave applicable to casual employees in accordance with relevant legislation.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160845" is_show="true" optional="false" premium="false" title="Workplace Policies"><contract_block block_group="" id="2837497" optional="false" probation="false" visible="true">
		<p><b>9. Workplace Policies</b></p>
		&nbsp;

		<p>9.1 The Employer may from time to time have written workplace policies in place which deal with a variety of matters concerning how the workplace operates, procedures to be followed and expectations in relation to particular aspects of the business. The purpose of these policies is to make clear what the Employer expects from you in relation to the aspect of the business dealt with by the policy.</p>
		&nbsp;

		<p>9.2 You are required to be familiar with the content of all such policies, and to comply with their terms at all times. Any failure to do so may result in disciplinary action. If you are uncertain of where these polices are located or what obligations they impose, you have an express obligation to raise this with your manager. Your manager will then provide you with, or direct you to, the required information.</p>
		&nbsp;

		<p>9.3 To the extent that the policies describe benefits and entitlements, these are discretionary in nature and are not intended to be contractual. The terms and conditions of your employment that are intended to be contractual are set out in this contract.</p>
		&nbsp;

		<p>9.4 The Employer may unilaterally introduce, vary, remove or replace policies at any time during the course of your employment.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160846" is_show="true" optional="false" premium="false" title="Dress Code and Protective Equipment"><contract_block block_group="" id="2837498" optional="false" probation="false" visible="true">
		<p><b>10. Dress Code and Protective Equipment</b></p>
		&nbsp;

		<p>10.1 You are required to wear appropriate and adequate clothing and footwear (including where relevant protective clothing and/or equipment) suitable to the nature of the work you perform and the location where you perform that work, or as directed or required by the Employer&rsquo;s workplace policies.</p>
		<br />
		<br />
		&nbsp;
		<p>10.2 You must apply all due diligence to the care and maintenance of such clothing and equipment.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160847" is_show="true" optional="false" premium="false" title="Confidential Information"><contract_block block_group="" id="2837499" optional="false" probation="false" visible="true">
		<p><b>11. Confidential Information</b></p>
		&nbsp;

		<p>11.1 During and after your employment, you must:<br />
		&nbsp;</p>

		<p>(a) keep all Confidential Information secret and confidential;</p>
		&nbsp;

		<p>(b) take all reasonable and necessary precautions to maintain the secrecy and prevent the disclosure of any Confidential Information;</p>
		&nbsp;

		<p>(c) not disclose any Confidential Information to any third party; and</p>
		&nbsp;

		<p>(d) not use any part of or make copies of any Confidential Information,<br />
		except:</p>
		&nbsp;

		<p></p>

		<ul>
			<li>as reasonably required in the ordinary and proper course of your employment;</li>
			<li>to the extent required by law; or</li>
			<li>if the Employer&rsquo;s written consent is first obtained.</li>
		</ul>
		&nbsp;

		<p>11.2 <b>&ldquo;Confidential Information&rdquo;</b> means any information relating to the business or affairs of the Employer, its clients or it&rsquo;s Related Bodies Corporate (as defined in the <i>Corporations Act 2001</i> (Cth), that is not in the public domain including, but not limited to, any document, record, computer file, lists of current or former clients, trade secrets, customer or client details and information, product or service information, teaching methods, sales and marketing information, lists of prospective clients or customers, information relating to any computer systems or software, financial information, discovery, invention, drawing, design, strategy, plan, data, report, process, proposal, budget, idea, concept or know how.</p>
		&nbsp;

		<p>11.3 This clause will survive the termination of your employment, irrespective of the basis of the termination, and shall remain in full force and effect indefinitely.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160848" is_show="true" optional="false" premium="false" title="Conflicts of Interest"><contract_block block_group="" id="2837500" optional="false" probation="false" visible="true">
		<p><b>12. Conflicts of Interest</b></p>
		&nbsp;

		<p>12.1 You are required to immediately disclose any potential, perceived or actual conflict of interest (whether direct or indirect) that may give rise to a conflict with the performance of your employment obligations to the Employer, or the Employer&rsquo;s business or reputational interests.</p>
		&nbsp;

		<p>The Employer may require you to take action to eliminate or reduce any such conflict. In the event that in the opinion of the Employer you fail or refuse to declare any such conflict, or to resolve it in a manner satisfactory to the Employer in accordance with its directions, then notwithstanding any other provision of this contract, the Employer may terminate your employment.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160849" is_show="true" optional="false" premium="false" title="Medical Examination and Tests"><contract_block block_group="" id="2837501" optional="false" probation="false" visible="true">
		<p><b>13. Medical Examination and Tests</b></p>
		&nbsp;

		<p>13.1 The Employer may at any time require that you obtain and disclose information from your medical practitioner/s regarding your capacity to undertake your employment, including without limitation a report from the practitioner answering specific questions raised by the Employer. The Employer shall treat all such information confidentially, though it may disclose same to its medical/legal advisers. Provision of such information shall be at your expense, unless the Employer agrees otherwise.</p>
		&nbsp;

		<p>13.2 The Employer may at any time, at its own expense, require you to undergo medical examinations and/or tests by a practitioner of its choice in relation to any matters which could affect your employment. You authorise the practitioner to disclose to the Employer and its medical/legal advisers any information arising from such examinations or tests. Any report generated by the practitioner shall be company property.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160850" is_show="true" optional="false" premium="false" title="Privacy"><contract_block block_group="" id="2837502" optional="false" probation="false" visible="true">
		<p><b>14. Privacy</b></p>
		&nbsp;

		<p>14.1 You consent to the Employer collecting and using personal information and sensitive personal information as defined in the <i>Privacy Act 1988</i> (Cth) for any purpose relating to your employment with the Employer. The personal information will be held in a secure location.</p>
		&nbsp;

		<p>14.2 You also consent to the Employer disclosing personal information and sensitive personal information about you to other persons for reasons relating to your employment or for the Employer&rsquo;s business requirements. These persons include the Australian Tax Office, superannuation fund trustees and administrators, insurers, medical or occupational practitioners, financial and legal advisers, potential purchasers on sale of business and law enforcement bodies.</p>
		&nbsp;

		<p>14.3 You also consent to the Employer disclosing your personal information and image or likeness for marketing purposes including on the Employer&rsquo;s website.</p>
		&nbsp;

		<p>14.4 This clause will survive the termination of your employment, irrespective of the basis of the termination, and shall remain in full force and effect indefinitely.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160851" is_show="true" optional="false" premium="false" title="Surveillance"><contract_block block_group="" id="2837503" optional="false" probation="false" visible="true">
		<p><b>15. Surveillance</b></p>
		&nbsp;

		<p>15.1 The Employer may carry out workplace monitoring on a continuous basis throughout your employment. This includes surveillance of computers, other electronic devices and information technology systems, including internet and email, via software and/or human review.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160852" is_show="true" optional="false" premium="false" title="Termination"><contract_block block_group="" id="2837504" optional="false" probation="false" visible="true">
		<p><b>16. Termination</b></p>
		&nbsp;

		<p>16.1 As a casual employee, your employment terminates at the end of each engagement and recommences on each new engagement. However, you or the Employer may terminate your employment or any engagement at any time for any reason by giving one hour&rsquo;s notice of termination, or the payment or forfeiture of one hour&rsquo;s wages in lieu of notice.</p>
		&nbsp;

		<p>16.2 On termination of your employment, you must immediately return to the Employer all company property that is in your possession, custody or control including but not limited to: all documents, Confidential Information, company equipment, software, computers, credit cards, keys, vehicles and property leased by the Employer.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160853" is_show="true" optional="false" premium="false" title="Deductions"><contract_block block_group="" id="2837505" optional="false" probation="false" visible="true">
		<p><b>17. Deductions</b></p>
		&nbsp;

		<p>17.1 You agree that the Employer may make deductions from any amount payable to you:<br />
		&nbsp;</p>

		<p>(a) where the deduction amount relates to any overpayment of wages or other benefit or entitlement (including without limitation paid leave in advance of accrual);</p>

		<p></p>

		<p>(b) where the deduction amount relates to the reasonable cost or repair of any equipment or property damaged, lost or not returned to the Employer; and/or</p>
		&nbsp;

		<p>(c) where you do not serve out your full notice period on termination but are required to do so by the Employer. The deduction amount will be equivalent to the value of the remuneration you would have earned during the balance of the notice period, and you acknowledge that this constitutes a reasonable estimate of the damage to the Employer arising from your failure to serve out the full notice period; and/or</p>
		&nbsp;

		<p>(d) of any other amount permissible by law.</p>
		&nbsp;

		<p>17.2 You agree to execute any separate written document necessary to give effect to any such deduction.</p>
		&nbsp;

		<p>17.3 This clause will survive the termination of your employment, irrespective of the basis of the termination, and shall remain in full force and effect indefinitely.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160854" is_show="true" optional="false" premium="false" title="General"><contract_block block_group="" id="2837506" optional="false" probation="false" visible="true">
		<p><b>18. General</b></p>
		&nbsp;

		<p>18.1 This contract will continue to apply to your employment notwithstanding any change to your position, duties, hours of work, remuneration or location, unless otherwise agreed in writing.</p>
		&nbsp;

		<p>18.2 This contract constitutes the entire agreement between you and the Employer with respect to its subject matter, and supersedes any prior written or other agreement between you and the Employer to the extent permitted by law.</p>
		&nbsp;

		<p>18.3 After execution, the terms of this contract may not be changed or modified in any way other than as contemplated by this contract, unless it is in writing signed by both you and the Employer.</p>
		&nbsp;

		<p>18.4 This contract is governed by the laws of the jurisdiction of your initial usual place of employment as described in clause 2.1.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160855" is_show="true" optional="false" premium="false" title="Signatures"><contract_block block_group="" id="2837507" optional="false" probation="false" visible="true">
		<p>If you accept the terms contained in this contract, please sign the declaration below.</p>
		&nbsp;

		<p>Yours sincerely,</p>
		<br />
		<variable_signature_pad auto_populate="" block_options="[]" help_text="" id="171576" initial_value="Employer Signature" required="false" variable_name="sender_signature" variable_type="Signature Pad">sender_signature</variable_signature_pad><br />
		<variable_string auto_populate="recipient_manager_first_name" block_options="[]" help_text="" id="171550" initial_value="Superior first name" required="true" variable_name="superior_first_name" variable_type="String">superior_first_name</variable_string> <variable_string auto_populate="recipient_manager_last_name" block_options="[]" help_text="" id="171551" initial_value="Superior last name" required="true" variable_name="superior_last_name" variable_type="String">superior_last_name</variable_string><br />
		<variable_string auto_populate="recipient_manager_job_title" block_options="[]" help_text="" id="171552" initial_value="Superior title" required="true" variable_name="superior_title" variable_type="String">superior_title</variable_string><br />
		<variable_string auto_populate="organisation_name" block_options="[]" help_text="" id="171581" initial_value="company_name" required="false" variable_name="company_name 2" variable_type="String">company_name 2</variable_string><br />
		<variable_signature_pad auto_populate="" block_options="[]" help_text="" id="171575" initial_value="Employee Signature" required="false" variable_name="recipient_signature" variable_type="Signature Pad">recipient_signature</variable_signature_pad></contract_block></contract_section>
    `);
	})
	.catch(error => {
		console.error(error.stack);
	});
