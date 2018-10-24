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
import EhList from './plugins/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import EhTable from './plugins/ckeditor5-table/src/table';
import EhTableToolbar from './plugins/ckeditor5-table/src/tabletoolbar';

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
	EhList,
	Paragraph,
	EhTable,
	EhTableToolbar,
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
		editor.setData(`
		<contract_section hide_title="true" hide_title_in_document="true" id="1160867" is_show="true" optional="false" premium="false" title="title"><contract_block block_group="" id="2837523" optional="false" probation="false" visible="true">
		<p><variable_image auto_populate="organisation_logo" block_options="[]" help_text="" id="294580" initial_value="" required="true" variable_name="Logo" variable_type="Image">Logo</variable_image></p>
		
		<p></p>
		
		<h2>Australian Centre for Advanced Computing and Communication</h2>
		
		<p>EMPLOYMENT AGREEMENT<br />
		Between:<br />
		<br />
		<br />
		&nbsp;<variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="294582" initial_value="[first name]" required="true" variable_name="Employee first name" variable_type="String">Employee first name</variable_string><variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="294583" initial_value="[last name]" required="true" variable_name="Employee last name" variable_type="String">Employee last name</variable_string><br />
		<br />
		<br />
		and<br />
		<br />
		&nbsp;</p>
		
		<h2>Australian Centre for Advanced Computing&nbsp;<br />
		and Communication Pty Ltd</h2>
		
		<p>ABN: 27 095 046 923<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		&nbsp;Table of Contents&nbsp;</p>
		
		<ol>
			<li><strong>The Parties&nbsp;</strong></li>
			<li><strong>Employment&nbsp;</strong></li>
			<li><strong>Conditional Offer Of Employment&nbsp;</strong></li>
			<li><strong>Position and Duties&nbsp;</strong></li>
			<li><strong>Reporting Structure&nbsp;</strong></li>
			<li><strong>Probationary Period (Only Applicable for new Starters)&nbsp;</strong></li>
			<li><strong>Hours of Work</strong></li>
		</ol>
		
		<p>Overtime&nbsp;</p>
		
		<p>On Call</p>
		
		<p>Bring Your Own Device (BYOD)</p>
		
		<ol start="8">
			<li><strong>Location&nbsp;</strong></li>
			<li><strong>Policies&nbsp;</strong></li>
			<li><strong>Performance Reviews&nbsp;</strong></li>
			<li><strong>Remuneration&nbsp;</strong></li>
			<li><strong>Remuneration Reviews&nbsp;</strong></li>
			<li><strong>Deduction of Overpayments or Monies Owing&nbsp;</strong></li>
			<li><strong>Superannuation&nbsp;</strong></li>
			<li><strong>Expenses&nbsp;</strong></li>
			<li><strong>Use of Private Vehicle&nbsp;</strong></li>
			<li><strong>Annual Leave&nbsp;</strong></li>
			<li><strong>Personal and Carer&rsquo;s Leave&nbsp;</strong></li>
			<li><strong>Compassionate Leave&nbsp;</strong></li>
			<li><strong>Long Service Leave&nbsp;</strong></li>
			<li><strong>Parental Leave&nbsp;</strong></li>
			<li><strong>Public Holidays&nbsp;</strong></li>
			<li><strong>Time-Off&nbsp;</strong></li>
			<li><strong>Equipment&nbsp;</strong></li>
			<li><strong>Confidential Information&nbsp;</strong></li>
			<li><strong>Intellectual Property and Moral Rights</strong></li>
			<li><strong>Protection of Our Interests</strong></li>
			<li><strong>Private Jobs and Competitions</strong></li>
			<li><strong>Termination of Employment</strong></li>
			<li><strong>Redundancy&nbsp;</strong></li>
			<li><strong>Severability&nbsp;</strong></li>
			<li><strong>Entire Agreement</strong></li>
			<li><strong>Amendment</strong></li>
			<li><strong>Waiver&nbsp;</strong></li>
			<li><strong>Associated entities&nbsp;</strong></li>
			<li><strong>Dispute Resolution Procedure&nbsp;</strong></li>
			<li><strong>Handling Information and Privacy</strong></li>
			<li><strong>Governing Law&nbsp;</strong></li>
			<li><strong>Execution and Date</strong></li>
		</ol>
		
		<p><strong>Schedule A&nbsp;</strong></p>
		
		<p>Terms of Employment <strong>Schedule B</strong></p>
		
		<p>Position Description and Duties<strong>Schedule C</strong></p>
		
		<p>Variable Reward Scheme<strong>Schedule D</strong></p>
		
		<p>Sales Incentive Plan <strong>Schedule E</strong></p>
		
		<p>Special Conditions for Sponsored Employees<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<strong>Document Credentials</strong><br />
		<br />
		<strong>Employee Details</strong></p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:120px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp; Employee Name</strong></span></td>
					<td class="table-cell" style="width:195px;"><variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="294582" initial_value="[first name]" required="true" variable_name="Employee first name" variable_type="String">Employee first name</variable_string><variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="294583" initial_value="[last name]" required="true" variable_name="Employee last name" variable_type="String">Employee last name</variable_string></td>
					<td class="table-cell" style="width:120px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Position&nbsp;</strong></span></td>
					<td class="table-cell" style="width:195px;"><variable_string auto_populate="recipient_job_title" block_options="[]" help_text="" id="294585" initial_value="[job title]" required="true" variable_name="Employee job title" variable_type="String">Employee job title</variable_string></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>AC3 Details</strong><br />
		We welcome any enquiries&nbsp;regarding this document, its content, structure or scope. These should be directed to:&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:321px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Manager</strong></span></td>
					<td class="table-cell" style="width:320px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;People and Culture</strong></span></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:115px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Name:</strong></span></td>
					<td class="table-cell" style="width:203px;"><variable_string auto_populate="recipient_manager_name" block_options="[]" help_text="" id="294604" initial_value="[manager name]" required="true" variable_name="Manager full name" variable_type="String">Manager full name</variable_string></td>
					<td class="table-cell" style="width:118px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Name:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:198px;">&nbsp;Kathy Seymour</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:115px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Telephone:</strong></span></td>
					<td class="table-cell" style="width:203px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294611" initial_value="Insert manager landline" required="false" variable_name="Insert manager landline" variable_type="String">Insert manager landline</variable_string></td>
					<td class="table-cell" style="width:118px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Telephone:</strong></span></td>
					<td class="table-cell" style="width:198px;">&nbsp;02 9199 0950</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:115px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Mobile:</strong></span></td>
					<td class="table-cell" style="width:203px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294612" initial_value="Insert manager mobile" required="false" variable_name="Insert manager mobile" variable_type="String">Insert manager mobile</variable_string></td>
					<td class="table-cell" style="width:118px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Mobile:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:198px;">&nbsp;0417 046 101</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:115px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Email:</strong></span></td>
					<td class="table-cell" style="width:203px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294613" initial_value="Insert manager email" required="false" variable_name="Insert manager email" variable_type="String">Insert manager email</variable_string></td>
					<td class="table-cell" style="width:118px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Email:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:198px;">&nbsp;Kathy.Seymour@ac3.com</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>Document Control</strong><br />
		<strong>Information Classification</strong></p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:156px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Classification</strong></span></td>
					<td class="table-cell" style="width:185px;">&nbsp;Commercial in Confidence</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>Preparation</strong></p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:85px;background-color:rgb(51, 102, 153);"></td>
					<td class="table-cell" style="width:179px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Name</strong></span></td>
					<td class="table-cell" style="width:216px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Title</strong></span></td>
					<td class="table-cell" style="width:152px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Date</strong></span></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:85px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Prepared:</strong></span></td>
					<td class="table-cell" style="width:179px;"><variable_select auto_populate="" block_options="[]" help_text="" id="294614" initial_value="Insert Name" required="false" variable_name="Insert Name" variable_type="Select">Insert Name</variable_select></td>
					<td class="table-cell" style="width:216px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294615" initial_value="Insert position" required="false" variable_name="Insert position" variable_type="String">Insert position</variable_string></td>
					<td class="table-cell" style="width:152px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294616" initial_value="Insert Date" required="false" variable_name="Insert Date" variable_type="String">Insert Date</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:85px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Reviewed:</strong></span></td>
					<td class="table-cell" style="width:179px;"><variable_string auto_populate="recipient_manager_first_name" block_options="[]" help_text="" id="294602" initial_value="[manager first name]" required="true" variable_name="Manager first name" variable_type="String">Manager first name</variable_string><variable_string auto_populate="recipient_manager_last_name" block_options="[]" help_text="" id="294603" initial_value="[manager last name]" required="true" variable_name="Manager last name" variable_type="String">Manager last name</variable_string></td>
					<td class="table-cell" style="width:216px;"><variable_string auto_populate="recipient_manager_job_title" block_options="[]" help_text="" id="294591" initial_value="[manager job title]" required="true" variable_name="Employee manager job title" variable_type="String">Employee manager job title</variable_string></td>
					<td class="table-cell" style="width:152px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294617" initial_value="Insert Date" required="false" variable_name="Insert Date 2" variable_type="String">Insert Date 2</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:85px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Updated:</strong></span></td>
					<td class="table-cell" style="width:179px;"></td>
					<td class="table-cell" style="width:216px;"></td>
					<td class="table-cell" style="width:152px;"></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>Distribution List</strong></p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:184px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Name</strong></span></td>
					<td class="table-cell" style="width:162px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Organisation</strong></span></td>
					<td class="table-cell" style="width:291px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Title</strong></span></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:184px;"><variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="294582" initial_value="[first name]" required="true" variable_name="Employee first name" variable_type="String">Employee first name</variable_string><variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="294583" initial_value="[last name]" required="true" variable_name="Employee last name" variable_type="String">Employee last name</variable_string></td>
					<td class="table-cell" style="width:162px;">&nbsp;AC3</td>
					<td class="table-cell" style="width:291px;"><variable_string auto_populate="recipient_job_title" block_options="[]" help_text="" id="294585" initial_value="[job title]" required="true" variable_name="Employee job title" variable_type="String">Employee job title</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:184px;"><variable_string auto_populate="recipient_manager_name" block_options="[]" help_text="" id="294604" initial_value="[manager name]" required="true" variable_name="Manager full name" variable_type="String">Manager full name</variable_string></td>
					<td class="table-cell" style="width:162px;">&nbsp;AC3</td>
					<td class="table-cell" style="width:291px;"><variable_string auto_populate="recipient_manager_job_title" block_options="[]" help_text="" id="294591" initial_value="[manager job title]" required="true" variable_name="Employee manager job title" variable_type="String">Employee manager job title</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:184px;">&nbsp;Kathy Seymour</td>
					<td class="table-cell" style="width:162px;">&nbsp;AC3</td>
					<td class="table-cell" style="width:291px;">&nbsp;Head of People and Culture</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:184px;">&nbsp;Nabil Rophael</td>
					<td class="table-cell" style="width:162px;">&nbsp;AC3</td>
					<td class="table-cell" style="width:291px;">&nbsp;Chief Financial Officer (payroll)</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:184px;">&nbsp;Neini Tan</td>
					<td class="table-cell" style="width:162px;">&nbsp;AC3</td>
					<td class="table-cell" style="width:291px;">&nbsp;Assistant Accountant (Payroll)</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<br />
		<strong>1. THE PARTIES</strong></p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:174px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employee Name (&quot;you&quot;):</strong></span></td>
					<td class="table-cell" style="width:467px;"><variable_string auto_populate="recipient_manager_first_name" block_options="[]" help_text="" id="294602" initial_value="[manager first name]" required="true" variable_name="Manager first name" variable_type="String">Manager first name</variable_string><variable_string auto_populate="recipient_manager_last_name" block_options="[]" help_text="" id="294603" initial_value="[manager last name]" required="true" variable_name="Manager last name" variable_type="String">Manager last name</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:174px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employer (&quot;we/us&quot;):</strong></span></td>
					<td class="table-cell" style="width:467px;">&nbsp;Australian Centre for Advanced Computing and Communication Pty Ltd<br />
					&nbsp;(&quot;AC3&quot;)</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>2. EMPLOYMENT</strong></p>
		
		<p>2.1&nbsp;Subject to clause 3 below, your employment is deemed to have commenced on the Commencement<br />
		Date set out in Schedule A of this Employment Agreement (&ldquo;Agreement&rdquo;).</p>
		
		<p>FOR EXISTING STAFF SUBSTITUTE THE FOLLOWING:</p>
		
		<p>2.1&nbsp;While this Employment Agreement (&ldquo;Agreement&rdquo;) is deemed to commence on the Commencement Date set out in Schedule A (subject to clause 3 below), it is acknowledged that it constitutes a revision of certain terms and conditions and that your employment is continuous for all purposes from the date on which you first commenced employment with AC3 or Klikon Solutions Pty Ltd (see &ldquo;Original Commencement Date&rdquo; in Schedule A).<br />
		2.2&nbsp;You will be employed in the position and in the employment capacity as set out in Schedule A of this Agreement.<br />
		<br />
		2.3&nbsp;Your employment may end in accordance with clause 29 &ldquo;Termination Of Employment&rdquo; of this Agreement.<br />
		<br />
		<strong>3. CONDITIONAL OFFER OF EMPLOYMENT</strong><br />
		3.1 This offer of employment is conditional on:&nbsp;</p>
		
		<p>3.1.1&nbsp;You providing evidence of your identity (100 points ID check);<br />
		3.1.2&nbsp;You providing, as and to the extent required by us, evidence that you hold qualifications/certifications you purport to hold; and<br />
		3.1.3&nbsp;You demonstrating as required by us, that you are eligible to work in Australia by the production of one of the following documents:</p>
		
		<p>3.1.1.1&nbsp;evidence of Australian citizenship;<br />
		3.1.1.2&nbsp;evidence of permanent residency;<br />
		3.1.1.3&nbsp;a valid temporary visa permitting you to work in Australia; or<br />
		3.1.1.4&nbsp;in the case of a Subclass 457 visa or Temporary Skilled Shortage visa sponsored by us (&ldquo;Temporary Work Visa&rdquo;), evidence of having successfully obtained that Temporary Work Visa, or approval of a nomination application to transfer from your previous sponsor.</p>
		
		<p>In either case, the Special Conditions for Sponsored Employees set out at&nbsp;<variable_string auto_populate="" block_options="[]" help_text="" id="273968" initial_value="Schedule E" required="false" variable_name="Schedule E" variable_type="String">Schedule E</variable_string>will also apply to this Agreement</p>
		
		<p>Ensure Schedule number here matches to the number of the Schedule pertaining to &ldquo;Special Conditions for Sponsored Employees&ldquo; in the back of the Agreement (eg if deleting or adding Schedules at the back, the numbering may need to change)</p>
		
		<p>3.1.1.5 Copies of these documents will be taken and held by us. &nbsp;If your eligibility to work changes during the course of your employment you must inform us. Should you be ineligible to work in Australia your employment will immediately cease from the date of such ineligibility.</p>
		
		<p>3.1.4 There being no restriction upon your ability to commence employment with us on the commencement date under the terms of employment specified in this Agreement. By signing this Agreement, you warrant:</p>
		
		<p>3.1.1.6 that there are no limitations on your ability to fully perform all of the inherent requirements of your duties and responsibilities for us, including but not limited to physical or psychological limitations; and<br />
		3.1.1.7 that you will not breach continuing obligations arising from any prior employment in the performance of your duties and responsibilities for us, including confidentiality obligations.</p>
		
		<p>3.1.5 You undertaking and:</p>
		
		<p>3.1.1.8 satisfying any reasonable criminal history check (hereafter referred to as &ldquo;Police Check&rdquo;) or other reference checks we carry out prior to or on commencement of employment, with a resultant report that meets our operational requirements; and<br />
		3.1.1.9 continuing to satisfy a Police Check, with a resultant report that meets our operational requirements, every two (2) years thereafter.</p>
		
		<p>3.2 By signing this Agreement you agree that:</p>
		
		<p>3.2.1 By signing this Agreement you agree that:<br />
		any inability to produce the evidence required, or any breach of these warranties, will constitute grounds for immediate termination of your employment or revocation of this Agreement, as may be the case; and<br />
		3.2.2 we retain the right to terminate your employment immediately in the event that you are unable to commence employment with us from the Commencement Date (at Schedule A of this Agreement) or continue such employment due to a limitation, restriction or restraint, that prevents you from commencing or continuing employment with us under the terms of employment specified in this Agreement.</p>
		
		<p><br />
		<strong>4. POSITION AND DUTIES</strong><br />
		4.1 Your position description and duties are set out in Schedule B of this Agreement.<br />
		4.2 In addition, you may be required to perform other duties, which are not included in your position description and which you are capable of performing.&nbsp;<br />
		4.3 Subject to any immigration requirements relating to sponsored employees, we may change the position to which you report, or make reasonable changes to your duties, title or status as required to meet our changing business needs. &nbsp;Such a change will therefore not represent a variation of your employment terms.<br />
		4.4 If your position, duties or reporting structure change, this Agreement will continue to apply to your employment unless both of us enter into a new written agreement or vary this Agreement in writing.<br />
		4.5 You shall perform the responsibilities assigned to you to the best of your abilities and knowledge.<br />
		4.6 You shall use your best endeavours to promote our interests. &nbsp;You shall not engage in conduct or activity that may raise questions as to our honesty, impartiality or integrity.&nbsp;<br />
		4.7 The obligations and duties owed by you to us under the terms of this Agreement are intended to be continuing and shall be owed by you to any of our associated entities (as that term is defined under the <i>Corporations Act 2001</i> (C&rsquo;th))for which you perform services.<br />
		4.8 You must not undertake any other appointment or position (including directorship) or work or advise or provide services to, or be engaged, or associated with any other business or activity that:</p>
		
		<p>4.8.1 results in the business or activity competing with us;<br />
		4.8.2 adversely affects us or our reputation; or<br />
		4.8.3 hinders the performance of your duties.</p>
		
		<p>4.9 You agree that you are unaware of any legal constraint or circumstance, such as a prior restraint of trade provision, that would prevent you from working with us.<br />
		4.10 You must not, other than as set out in this Agreement, accept any payment or other benefit from any person as an inducement or reward for any act or omission in connection with our business and affairs or the duties assigned to you by us from time to time.<br />
		4.11 You must at all times act honestly and in a manner consistent with your employment.</p>
		
		<p><br />
		<strong>5. REPORTING STRUCTURE</strong><br />
		5.1 You will report to the position as outlined in Schedule A of this Agreement.<br />
		5.2 We may change the reporting structure in accordance with clause 4.3.<br />
		<br />
		<strong>6. PROBATIONARY PERIOD (ONLY APPLICABLE FOR NEW STARTERS)</strong><br />
		6.1 You will be initially employed for a six (6) month probationary period. &nbsp;During this probationary period, either party may terminate the employment by giving one (1) weeks&#39; notice to the other party (or by us giving payment to you in lieu of notice for part or all of the period of notice calculated by reference to your remuneration).<br />
		<br />
		<strong>7. HOURS OF WORK</strong><br />
		7.1 Your ordinary hours of work are set out in Schedule A of this Agreement.<br />
		7.2 You may be required to work reasonable additional hours (being up to 30 mins either side of start/finish times listed in Schedule A) to satisfy the duties and responsibilities of your position and our operational requirements, including to meet client deadlines.&nbsp;<br />
		7.3 You agree these hours are reasonable and that your remuneration (at clause 11) takes into account payment for these hours.<br />
		<br />
		<strong>OVERTIME</strong><br />
		7.4 Overtime is payable in accordance with our Overtime Policy.​​​​ <strong>On Call&nbsp;</strong><variable_string auto_populate="" block_options="[]" help_text="" id="270577" initial_value="Include for relevant positions (on call/24x7 positions) only; otherwise delete" required="false" variable_name="Include for relevant positions (on call/24x7 positions) only; otherwise delete" variable_type="String">Include for relevant positions (on call/24x7 positions) only; otherwise delete</variable_string><br />
		7.5. By the nature of your position, you may be required by us to be contactable and available to perform work outside normal working hours (hereafter referred to as &ldquo;On Call&rdquo;).<br />
		<br />
		7.6. Where you are required by us to be On Call, you will be paid an On Call allowance in accordance with our On Call policy.<br />
		&nbsp;Include for relevant positions (on call/24x7 positions) only; otherwise deleteInclude for relevant positions (on call/24x7 positions) only; otherwise delete<strong>Bring Your Own Device (BYOD)&nbsp;</strong><br />
		7.7. Recognising that we provide our customers with 24x7 service, and that this may require you to be contacted out of hours from time to time, you will be paid a BYOD Allowance toward the cost of maintaining a mobile telephone and home internet service in accordance with our BYOD Policy.Include for relevant positions approved for BYOD allowances<br />
		<strong>8. LOCATION</strong><br />
		8.1. Your principal place of work will be as specified in Schedule A of this Agreement.<br />
		<br />
		8.2. We reserve the right to transfer you to another principal place of work should our operational circumstances require it.<br />
		<br />
		8.3. We may require you to travel to work at alternative locations to suit our business requirements. We will pay the reasonable costs of any travel required of you in accordance with our relevant policies and<br />
		procedures.<br />
		<br />
		<strong>9. POLICIES</strong><br />
		9.1. You agree to comply with our policies and procedures which are made available on the corporate intranet.<br />
		<br />
		9.2. The policies and procedures do not form part of your employment contract and may be changed by us from time to time and do not create any binding obligations upon us which are legally enforceable.<br />
		<br />
		9.3. In any event, if there is an inconsistency between a particular policy or procedure and this Agreement, the terms of this Agreement will override that particular policy or procedure.<br />
		<br />
		<strong>10. PERFORMANCE REVIEWS</strong><br />
		10.1. We may conduct a performance review on an annual basis or more frequently as required.<br />
		<br />
		10.2. At the time of the review, performance goals may be set in consultation with you. The performance review will take into account your ongoing development, productivity and contribution to us.<br />
		<br />
		<strong>11. REMUNERATION</strong><br />
		11.1. We will pay you the remuneration (base salary exclusive of superannuation), set out in Schedule A of this Agreement.<br />
		<br />
		11.2. The remuneration, the value of other terms and conditions and any payments made at our discretion under this Agreement, are intended to exceed all entitlements under the law or any applicable industrial award or agreement that may apply to your employment. To the extent possible, the excess will be used to offset any monetary entitlements under the law and under any other applicable industrial award or agreement, including penalty rates, overtime, annual leave loading and allowances. This arrangement does not disadvantage you and at the same time complies with any legislative, award or agreement obligation we may have, to the extent that the excess covers such entitlements.<br />
		<br />
		11.3. Remuneration payments are made periodically as specified in Schedule A of this Agreement. Payments are made by electronic funds transfer to a bank account nominated by you. We will deduct, in accordance with the law, any tax that is payable on your reemuneration.<br />
		<br />
		11.4. The details of your remuneration should be kept strictly confidential.<br />
		<br />
		<strong>12. REMUNERATION REVIEWS</strong><br />
		12.1. Your remuneration may be reviewed on an annual basis. Any increase in your remuneration will be at our discretion. Your rate of pay will not fall below any minimum established by the Fair Work Commission.<br />
		<br />
		<strong>13. DEDUCTION OF OVERPAYMENTS OR MONIES OWING</strong><br />
		13.1. In making any payments to you under your employment, you agree that we may deduct any amounts that you owe us. This also applies where we have made a payment to you in error. Any deduction will be made in accordance with the <i>Fair Work Act 2009.</i><br />
		<br />
		<strong>14. SUPERANNUATION</strong><br />
		14.1. Superannuation contributions are made periodically as specified in Schedule A of this Agreement.<br />
		<br />
		14.2. You agree to become a member of our default superannuation fund (named in the <i>Standard Choice Form</i>), or a fund of your choice.<br />
		<br />
		14.3. If you select a fund of your choice, we require a completed Standard Choice Form and necessary compliance documents to process your choice. Where you do not provide a <i>Standard Choice Form</i> and/or the necessary compliance documents, we will make contributions to our default fund (named in the <i>Standard Choice Form</i>) until a completed form and/or required compliance documents are received and processed in accordance with superannuation guarantee legislation.<br />
		<br />
		14.4. If you do not make a choice, we will make super contributions to our default fund.<br />
		<br />
		14.5. We will make contributions to our default fund or your chosen fund in accordance with superannuation guarantee legislation.<br />
		<br />
		<strong>15. EXPENSES</strong><br />
		15.1. In accordance with our relevant policy, we will reimburse you for reasonable business expenses incurred by you.<br />
		<br />
		<strong>16. USE OF PRIVATE VEHICLE</strong><br />
		16.1. Other than the case in which a relevant annual allowance is paid as part of the remuneration package, and in accordance with our relevant policy, reimbursement for private vehicle use for work related travel during office hours must be approved by us prior to that travel occurring. The rate payable per kilometre is as per the relevant policy, or the rate payable in any Award which may apply, whichever is higher.<br />
		<br />
		16.2. Except to the minimum extent required by legislation, we accept no responsibility for accident, injury or damage to any person or thing, traffic infringement, parking fines or other penalties imposed on you from the use of that vehicle.<br />
		<br />
		16.3. In order to be reimbursed for private vehicle use, we require that you hold an Australian or international drivers licence, maintain full comprehensive insurance and ensure vehicle registration is current.<br />
		<br />
		<strong>17. ANNUAL LEAVE</strong><br />
		17.1. You will be entitled to four (4) weeks annual leave for every one (1) year of continuous, full time service with us.<br />
		<br />
		17.2. The leave accrues on a pro rata basis and is cumulative.<br />
		<br />
		17.3. You are entitled to take annual leave at a time approved by us, where such approval will not be unreasonably withheld.<br />
		<br />
		17.4. If you have accrued excess annual leave, you may be directed by us to take part of this accrual, in accordance with the <i>Fair Work Act 2009</i> and any prevailing Award.<br />
		<br />
		17.5. Any accrued yet untaken annual leave will be paid to you when your employment ends.<br />
		<br />
		17.6. Subject to the terms of the <i>Fair Work Act 2009</i> and any prevailing Award, and upon application in writing by you, we may agree to cash out part of your accrued annual leave.<br />
		<br />
		<strong>18. PERSONAL AND CARER&rsquo;S LEAVE</strong><br />
		18.1. You are entitled to ten (10) days paid personal leave per one (1) year of continuous, full time service for occasions when:</p>
		
		<p>18.1.1 You are unable to attend work due to illness or injury which is not work-related (sick leave); or<br />
		18.1.2 A member of your immediate family or household requires care or support due to a personal illness or injury, or where there is an unexpected emergency affecting that member of your immediate family or household (carer&#39;s leave).<br />
		&nbsp;18.2. Personal leave accrues on a pro-rata basis and is cumulative from year to year.<br />
		<br />
		18.3. &quot;Immediate family or household&quot; means as defiled in clause 18.3.</p>
		
		<p>18.3.1&nbsp;a parent;<br />
		18.3.2 a child, an adopted child, a step child, an ex-nuptial child or an adult child;<br />
		18.3.3 a grandparent or grandchild; or<br />
		18.3.4 a sibling or their spouse.<br />
		&nbsp;18.4. When your employment ends, you are not entitled to payment of accrued but untaken personal leave.<br />
		<br />
		18.5. Your entitlement to sick leave is conditional on:</p>
		
		<p>18.5.1 You promptly notifying us of any illness or injury that will cause you to be absent from work and the approximate period for which you will be absent; and<br />
		18.5.2 If you are absent for two (2) days or more, you must provide us with a medical certificate from a registered medical practitioner or a statutory declaration to our satisfaction with respect to illness or injury. This requirement does not apply where you could not comply because of circumstances beyond your control.<br />
		18.5.3 Should you be absent either side of a weekend or Public Holiday then you will be required to provide us with a medical certificate from a registered medical practitioner or a statutory declaration to our satisfaction with respect to illness or injury.<br />
		18.6. We may, in our discretion, require you to provide a suitable form of evidence (such as a medical certificate or a statutory declaration) for any sick leave or paid or unpaid carer&#39;s leave that you take. This requirement does not apply where you could not comply because of circumstances beyond your control.<br />
		<br />
		<strong>19. COMPASSIONATE LEAVE</strong><br />
		19.1. Subject to you providing us with evidence that we reasonably require of the illness, injury or death, you are entitled to up to two (2) days compassionate leave for each occasion when a member of your immediate family or household:</p>
		
		<p>19.1.1 contracts or develops a personal illness that poses a serious threat to his or her life; or<br />
		19.1.2 sustains a personal injury that poses a serious threat to his or her life; or<br />
		19.1.3 dies.<br />
		&nbsp;19.2. &quot;Immediate family or household&quot; means as defined in clause 18.3.<br />
		<br />
		<strong>20. LONG SERVICE LEAVE</strong><br />
		20.1. You are entitled to long service leave in accordance with the <i>Fair Work Act 2009</i> and the National Employment Standards.<br />
		<br />
		<strong>21. PARENTAL LEAVE</strong><br />
		21.1. You are entitled to parental leave in accordance with the <i>Fair Work Act 2009</i> and the National Employment Standards.<br />
		<br />
		<strong>22. PUBLIC HOLIDAYS</strong><br />
		22.1. Subject to the following paragraph, you are entitled to be absent from work without loss of pay on public holidays gazetted in&nbsp;<variable_select auto_populate="" block_options="[{&quot;id&quot;:40636,&quot;option&quot;:&quot;Australian Capital Territory&quot;},{&quot;id&quot;:40635,&quot;option&quot;:&quot;New South Wales&quot;}]" help_text="" id="294619" initial_value="New South Wales" required="false" variable_name="New South Wales" variable_type="Select">New South Wales</variable_select>&nbsp;, &nbsp;if you were ordinarily required to work in the place where you are located.</p>
		
		<p>If employee is in the ACT, amend this field to &ldquo;Australian Capital Territory</p>
		
		<p><br />
		22.2. You understand and agree that our operational requirements and your duties and responsibilities may sometimes require you to work on a public holiday and that your remuneration includes compensation for these hours.<br />
		<br />
		<strong>23. TIME-OFF</strong><br />
		23.1. Reasonable periods of time off during normal business hours for private business, medical and dental appointments may be granted with a proportioned deduction made from salary or leave credits or alternatively, made up outside normal hours, subject to our prior approval.<br />
		<br />
		<strong>24. EQUIPMENT</strong><br />
		24.1. We will provide you with computer equipment, consumables and any other technologies as required to perform your duties. This may include a desktop, laptop, mobile phone, computer consumables and any other technologies reasonably required. These remain our property at all times.<br />
		<br />
		<strong>25. CONFIDENTIAL INFORMATION</strong><br />
		25.1. During your employment, we may transfer to you information which is proprietary or confidential (hereafter referred to as &ldquo;Confidential Information&rdquo;). You agree that all such Confidential Information received by you shall not be disclosed to any other person and shall be kept strictly confidential, and at all times remains our property. You acknowledge that from time to time you may be required to enter into separate confidentiality and/or non-disclosure agreements in accordance with our needs.<br />
		<br />
		25.2. For the purpose of this Agreement, &ldquo;Confidential Information&rdquo; means all information that:</p>
		
		<p>25.2.1 is confidential by nature;<br />
		25.2.2 is designated by us as confidential; or<br />
		25.2.3 you know or ought to know is confidential;<br />
		and includes all information related but not limited to:<br />
		25.2.4 Our customers;<br />
		25.2.5 Any information relating to our business affairs, accounts work, marketing plans, sales plans, prospects, research, management, financing, products, inventions, designs, processes and any data bases, data surveys, client lists, specifications, drawings, records, reports or software;<br />
		25.2.6 Our sales methods;<br />
		25.2.7 Financial or commercial information, including our assets and liabilities and any other matter that does or may affect our financial reputation;<br />
		25.2.8 Price lists;<br />
		25.2.9 Details of disputes with customers;<br />
		25.2.10 Trade secrets;<br />
		25.2.11 All information comprised in, or relating to, all intellectual property rights of us, our customers or other third parties;<br />
		25.2.12 Other information designated as confidential by us or our customers, which you receive, become aware of, develop, create or generate in the course of or in incidental to the operation of this Agreement;<br />
		25.2.13 Any note, calculation, conclusion, summary or other material derived or produced partly or wholly from any Confidential Information;<br />
		25.2.14 The terms of this Agreement; and<br />
		25.2.15 Our policies and procedures or other documents, material or other information whether in writing or otherwise which is not lawfully within the public domain concerning us or any of our customers, clients or suppliers to which you gain access, whether before, during or after your employment with us.<br />
		&nbsp;25.3. You agree and warrant:</p>
		
		<p>25.3.1 you will not, either during the operation of this Agreement or at any time thereafter use or disclose to any person or entity any of the Confidential Information;<br />
		25.3.2 you will hold the Confidential Information in trust and confidence;<br />
		25.3.3 you will not without our consent, directly or indirectly at any time use any Confidential Information other than in the performance of your employment and we may withhold our consent under this clause for as long as necessary in our opinion to protect the goodwill of our business; and<br />
		25.3.4 copy or reproduce in any way any material containing Confidential Information; and<br />
		25.3.5 you will use your best endeavours to prevent the unauthorised use or disclosure of any of the Confidential Information by third parties.<br />
		25.4. The obligations in clause 25 do not apply to any Confidential Information which:</p>
		
		<p>25.4.1 is in the public domain other than due to a breach of an obligation of confidence under this Agreement; and<br />
		25.4.2 you are required by law to disclose, although you must notify us immediately upon becoming aware that it will be required to disclose any Confidential Information in accordance with this clause 25.<br />
		25.5. You must take all reasonable precautions to prevent any unauthorised disclosure of Confidential Information, including the following precautions:</p>
		
		<p>25.5.1 You must at all times store all Confidential Information safely and securely;<br />
		25.5.2 You must immediately upon request by us, return all materials containing any Confidential Information and all copies thereof;<br />
		25.5.3 You must immediately notify us in writing of any actual, threatened or suspected unauthorised disclosure of any Confidential Information; and<br />
		25.5.4 You must take all reasonable measures to minimise any unauthorised dissemination of any Confidential Information which is in any way related to or resulting from an act or failure to act by you.<br />
		25.6. Any failure by us at any time to insist on performance of any provision of this clause 25 is not a waiver of our right at any later time to insist on the performance of that or any other provision of this clause 25.<br />
		<br />
		25.7. Any threatened, actual or suspected breach of this clause 25 will result in the appropriate action being taken, which could be dismissal if you are currently employed, or legal action if your employment has ended.<br />
		<br />
		25.8. For the avoidance of doubt, this clause 25 survives termination of this Agreement:</p>
		
		<p>25.8.1 indefinitely for Confidential Information in relation to Government and other customers that impose on us strict non-disclosure of Confidential Information for legislated or other reasons (i.e. you cannot disclose such Confidential Information at any time), except in accordance with clause 25.4.2; and<br />
		25.8.2 for a period no less than five (5) years from the date of termination for all other Confidential Information.<br />
		<strong>26. INTELLECTUAL PROPERTY AND MORAL RIGHTS</strong><br />
		26.1. You agree that you do not, by the performance of the Services or otherwise, acquire any rights in or to any patents, trademarks, service marks, copyrights or trade names used or adopted by us (the &ldquo;Trademarks&rdquo;), whether or not such Trademarks are registered.<br />
		<br />
		26.2. You must:</p>
		
		<p>26.2.1 immediately inform us of any matter which may come to your notice during the operation of this Agreement which may be of interest or importance or use to us; and<br />
		26.2.2 immediately communicate to us any proposals or suggestions occurring to you during the operation of this Agreement which may be of service to us.<br />
		&nbsp;26.3. Any discovery, design, invention, idea, concept, technique, secret process or improvement in procedure conceived, made, developed or discovered by you in the course providing services under this&nbsp; Agreement (whether alone or with any other person) which is capable of being used or adapted for use in connection with our activities (&ldquo;the Inventions&rdquo;) must immediately be disclosed to us, whether or not the Inventions are capable of being protected by copyright, letters patent, registered design or other protection.<br />
		<br />
		26.4. All Inventions will be part of the Confidential Information, and you assign or, to the extent necessary, will assign your entire right, title and interest in and to the Inventions (and any intellectual property protection obtained in respect of the Inventions) to us as we may nominate for the purpose. For the avoidance of doubt, ownership of all Inventions and/or intellectual property rights is owned by or immediately vests in the name of and for the benefit of us.<br />
		<br />
		26.5. You will at our expense execute all documents and do and execute all such further acts, matters and things as may be necessary or reasonable to:</p>
		
		<p>26.5.1 register or otherwise protect the Inventions; and<br />
		26.5.2 perfect the assignment required by this clause.<br />
		26.6. Whenever required to do so, and at our expense, you will apply or join in applying for letters patent or any other intellectual property protection reasonably determined by us in Australia or in any other part of the world for any Invention conceived, made, developed or discovered by you in the course of providing services under this Agreement. You will execute all instruments and do all things necessary to apply for such protection and to assign the benefit of that protection to us or our nominee.<br />
		<br />
		26.7. In relation to any works (as defined in Part IX of the Copyright Act 1968 (Cth)) made by you, in whole or part, in the course of employment, when the nature of the work, and the purpose, manner and context of its intended use, you consent to all of our acts or omissions, whether occurring prior to or subsequent to the execution of this letter of appointment, which may infringe any moral rights (as defined in Part IX of the Copyright Act 1968 (Cth)) you may have, including that:</p>
		
		<p>26.7.1 we will be described as the author of any work you perform;<br />
		26.7.2 where possible and appropriate, the author/s of the work may be acknowledged and attributed personally as the author/s of the work, along with us;<br />
		26.7.3 we and, if appropriate the client, may agree on the form of attribution to be given to particular works or projects.<br />
		26.8. You agree to indemnify us against all actions, claims, demands, costs, charges and expenses arising from any infringement or alleged infringement of any intellectual property rights by the use or granting of rights in respect of any Inventions by us or any other person.<br />
		<br />
		26.9. The obligations under this clause 26, continue after the termination of this Agreement for a period of no less than five (5) years from the date of termination.<br />
		<br />
		<strong>27. PROTECTION OF OUR INTERESTS</strong><br />
		27.1. In consideration of the remuneration paid to you, you agree that after the employment ends, for duration of the Restraint Period, you will not directly or indirectly;</p>
		
		<p>27.1.1 induce, encourage or solicit any of our employees to resign; or<br />
		27.1.2 induce, encourage or solicit any of our sponsors, customers, clients or suppliers with whom you have had dealings and influence over in the preceding&nbsp;<variable_select auto_populate="" block_options="[{&quot;id&quot;:40638,&quot;option&quot;:&quot;twelve&quot;},{&quot;id&quot;:40637,&quot;option&quot;:&quot;twenty-four&quot;}]" help_text="" id="294620" initial_value="twenty-four" required="false" variable_name="twenty-four" variable_type="Select">twenty-four</variable_select>&nbsp;months preceding termination, to end or restrict their business relationship with us; or</p>
		
		<p>For SLT, Sales and Consulting positions, leave this as 24 months, otherwise change to &ldquo;twelve&rdquo;</p>
		
		<p>27.1.3 undertake work for one of our customers or clients (or any related bodies corporate or their businesses or subcontractors) for whom you have specifically worked during your employment, unless through us or with our written consent.27.2. For the purposes of the previous clause the &quot;Restraint Period&quot; means:<br />
		&nbsp;&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:318px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employment Classification</strong></span></td>
					<td class="table-cell" style="width:323px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Restraint Period</strong></span></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:318px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Reception, Admin/clerical (Resource Coordinators)</strong></span></td>
					<td class="table-cell" style="width:323px;">&nbsp;3 months from the end of your employment</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:318px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Team leaders, Engineers, Relationship Managers, Service Desk, Project Managers, Service Delivery</strong></span></td>
					<td class="table-cell" style="width:323px;">&nbsp;6 months from the end of your employment, or if that is deemed unenforceable, 3 months</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:318px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Others</strong></span></td>
					<td class="table-cell" style="width:323px;">&nbsp;12 months from the end of your employment, or if that is deemed unenforceable, 6 months, or if that is deemed unenforceable, 3 months&nbsp;</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		27.3. You agree that each restriction in this clause 27:</p>
		
		<p>27.3.1 is fair and reasonable for the protection of our business and any associated entities;<br />
		27.3.2 does not unreasonably restrict your right to practice your profession or vocation; and<br />
		27.3.3 is independent of each other and the invalidity of one part does not affect the validity of the other and that if a part of any of the previous clauses is void but would be valid if deleted, varied or modified then the restrictions applies with those modifications necessary to make it valid.<br />
		27.4. If there is any inconsistency or contradiction between several prohibitions or restraints which are not invalid or unenforceable, the prohibition or restraint with the longest Restraint Period and the widest Restraint Area (currently the whole of Australia), to the exclusion of any other prohibition or restraint, constitutes the prohibition or restraint agreed by the parties.<br />
		<br />
		<strong>28. PRIVATE JOBS AND COMPETITIONS</strong><br />
		28.1. We acknowledge that from time to time you may wish to work privately outside the normal office hours and course of your employment to perform private jobs. Such work may be undertaken so long as it is not prohibited by any visa condition (if relevant), or undertaken in our office, and so long as you don&#39;t use our resources, name or equipment.<br />
		<br />
		28.2. The private jobs you choose to perform or the competitions you choose to enter are subject to clause 4 of this Agreement.<br />
		<br />
		28.3. Your performance of private jobs or involvement in competitions must not interfere in any way with your ability to perform your duties and responsibilities under this Agreement.<br />
		<br />
		<strong>29. TERMINATION OF EMPLOYMENT</strong><br />
		29.1. After the end of your probationary period, we may end your employment at any time by giving the minimum period of written notice in accordance with the following table:&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:314px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Period of Continuous Service</strong></span></td>
					<td class="table-cell" style="width:327px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Minimum Period of Notice</strong></span></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:314px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Less than 3 years</strong></span></td>
					<td class="table-cell" style="width:327px;">&nbsp;2 weeks</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:314px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;More than 3 years, but not more than 5 years</strong></span></td>
					<td class="table-cell" style="width:327px;">&nbsp;3 weeks</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:314px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;More than 5 years</strong></span></td>
					<td class="table-cell" style="width:327px;">&nbsp;4 weeks</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p>29.1.1 If you are over 45 years of age and have a minimum of two (2) years continuous service with us, you would be entitled to an additional one (1) weeks&rsquo; notice.<br />
		29.2. If we terminate your employment we may pay you the equivalent amount of your remuneration in lieu of notice, in accordance with clause 29.1, for all or part of the period of notice.<br />
		<br />
		29.3. We do not have to give you work during a period of notice, and may direct you not to attend our premises during that period.<br />
		<br />
		29.4. Notwithstanding the above, we may end your employment without giving you notice, including during the probationary period, if you engage in any act which would at common law warrant summary dismissal such as serious misconduct.<br />
		<br />
		29.5. Serious misconduct includes, but is not limited to, the following:</p>
		
		<p>29.5.1 a serious breach of this Agreement;<br />
		29.5.2 serious misconduct or a serious dereliction of your duties;<br />
		29.5.3 failing to comply with a lawful and reasonable direction given by us;<br />
		29.5.4 acts of dishonesty including falsifying records;<br />
		29.5.5 theft or attempted theft of our property or property of any other employee or client;<br />
		29.5.6 drunkenness or any other drug induced behaviour at work which, in our opinion adversely affects your performance; or<br />
		29.5.7 engaging in sexual harassment and discrimination at the workplace.<br />
		&nbsp;29.6. If termination of employment is at your instigation, you are required to give the minimum period of notice in accordance with the following table, unless otherwise agreed with management:&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:315px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employment Classification</strong></span></td>
					<td class="table-cell" style="width:326px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Minimum Period of Notice</strong></span></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:315px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Reception, admin/clerical staff</strong></span></td>
					<td class="table-cell" style="width:326px;">&nbsp;2 weeks</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:315px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Team leaders, Engineers, Relationship Managers, Service Desk Staff</strong></span></td>
					<td class="table-cell" style="width:326px;">&nbsp;4 weeks</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:315px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Other managers</strong></span></td>
					<td class="table-cell" style="width:326px;">&nbsp;6 weeks</td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		29.7. If termination of employment is at your instigation and you do not provide at least the minimum period of notice required, we may withhold from any monies due to you on termination, an amount not exceeding the amount you would have been paid in respect of the period of notice required under this clause less any period of notice actually given by you.<br />
		<br />
		29.8. Immediately upon your employment ending for any reason or at any other time requested by us, you must return to us all property belonging to us (for example cards, keys, computer, equipment and materials) that you have or can reasonably obtain and all property that you have, or can reasonably obtain, that contains Confidential Information in written and/or in electronic form. If you have in your possession any information or data that belongs to us which is recorded on any medium that is not capable of delivery to us, you must advise us of that fact, and we retain our right to obtain a copy of that information or data and erase or treat that data so it cannot be accessed, retrieved or reconstructed.<br />
		<br />
		<strong>30. REDUNDANCY</strong><br />
		30.1. If your position becomes redundant then we shall be under no obligation to pay you any redundancy payments unless specifically required to do so by the <i>Fair Work Act 2009</i>, National Employment Standards and/or Modern Award (at Schedule A, if any).<br />
		<br />
		<strong>31. SEVERABILITY</strong><br />
		31.1. If a clause or a part of a clause can be read in a way that makes it illegal, unenforceable or invalid, but can also be read in a way that makes it legal, enforceable and valid, it must be read in the latter way.<br />
		<br />
		31.2. If any clause or part of a clause is illegal, unenforceable or invalid, the clause or part is to be treated as removed from this Agreement, but the rest of this Agreement is not affected.<br />
		<br />
		<strong>32. ENTIRE AGREEMENT</strong><br />
		32.1. This Agreement (including applicable Schedule/s) comprises the entire agreement of the parties with respect to its subject matter. It sets out the only conduct relied on by the parties and supersedes all earlier conduct by the parties with respect to its subject matter.<br />
		<br />
		<strong>33. AMENDMENT</strong><br />
		33.1. This Agreement may be amended only in writing executed by both parties.<br />
		<br />
		<strong>34. WAIVER</strong><br />
		34.1. No failure or delay in exercising any right, power or remedy under this Agreement will operate as a waiver.<br />
		<br />
		<strong>35. ASSOCIATED ENTITIES</strong><br />
		35.1. Insofar as this Agreement relates to any associated entities of us, we hold the benefits of this Agreement insofar as they relate to any associated entities on trust for the associated entity and that we may enforce this Agreement on behalf of the associated entity and that any such associated entity may enforce this Agreement as it relates to that associated entity.<br />
		<br />
		<strong>36. DISPUTE RESOLUTION PROCEDURE</strong><br />
		36.1. In the event of you having a grievance or dispute you shall in the first instance attempt to resolve the matter with your immediate supervisor, who shall respond to such request as soon as reasonably practicable under the circumstances. Where the grievance or dispute concerns alleged actions of your immediate supervisor you may bypass this level in the procedure.<br />
		<br />
		36.2. If the grievance or dispute is not resolved under clause 36.1, you or your nominated representative may refer the matter to the next higher level of management for discussion. Such discussion should, if possible, take place within 24 hours after the request by you or your representative.<br />
		<br />
		36.3. If the grievance involves allegations of unlawful discrimination by a supervisor you may commence the grievance resolution process by reporting the allegations to the next level of management beyond that of the supervisor concerned. If there is no level of management beyond that involved in the allegation you may proceed directly to the process outlined at clause 36.5.<br />
		<br />
		36.4. If the grievance or dispute is still unresolved after discussions mentioned in clause 36.2, the matter shall be reported to you or your nominated representative and senior management or our nominated industrial representative. This should occur as soon as it is evident that discussions under clause 36.2 will not result in resolution of the dispute.<br />
		<br />
		36.5. If the dispute remains unresolved after the parties have genuinely attempted to achieve a settlement thereof, then notification of the existence of the dispute is to be given to the Fair Work Commission:</p>
		
		<p>36.5.1 The parties agree that disputes will be conciliated by the Fair Work Commission.<br />
		36.5.2 The parties agree that the Fair Work Commission may make recommendations following a conciliation conference and that the parties shall give due consideration to matters raised or any suggestion or recommendation made by the Fair Work Commission with a view to the prompt settlement of the dispute.<br />
		36.5.3 If the dispute remains unresolved, the parties agree that the dispute will be arbitrated by the Fair Work Commission and that the decision of the Fair Work Commission will be final and binding on the parties subject to the parties&rsquo; right of appeal.<br />
		36.6. Whilst all of the above procedure is being followed, normal work shall continue except in the case of a genuine safety issue.<br />
		<br />
		36.7. Discussions at any stage of the procedure shall not be unreasonably delayed by any party, subject to acceptance that some matters may be of such complexity or importance that it may take a reasonable period of time for the appropriate response to be made. If genuine discussions are unreasonably delayed or hindered, it shall be open to any party to give notification of the dispute in accordance with the procedure in clause 36.5.<br />
		<br />
		<strong>37. HANDLING INFORMATION AND PRIVACY</strong><br />
		37.1. We may from time to time need to collect, use and store personal information about you (for example, upon commencement of employment we will gather personal information to verify legal entitlement to work in Australia, to undertake Police Checks, and to set you up on the payroll). Personal information will only be collected, used and stored where it is lawful and necessary to do so as part of your employment.<br />
		<br />
		37.2. We may on occasion disclose personal information to other parties such as regulatory or law enforcement bodies where it is necessary and lawful to do so. In accepting this Agreement, you acknowledge and consent to this clause 37.<br />
		<br />
		37.3. In all cases, we undertake to comply with all relevant legal obligations that may apply.<br />
		<br />
		37.4. This clause 37 survives the termination of this Agreement.<br />
		<br />
		<strong>38. GOVERNING LAW</strong><br />
		38.1. This Agreement is governed by the laws of New South Wales and the parties submit to the exclusive jurisdiction of the courts of New South Wales.<br />
		<br />
		<strong>39. EXECUTION AND DATE</strong><br />
		Executed as an Agreement.<br />
		Date:&nbsp;<variable_string auto_populate="" block_options="[]" help_text="" id="294621" initial_value="Insert date" required="false" variable_name="Insert date 2" variable_type="String">Insert date 2</variable_string><br />
		&nbsp;&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Executed by Australian Centre for Advanced Computing and Communication without a common seal acting by:&nbsp;</strong></span></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p>&nbsp;&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:314px;"><br />
					<variable_signature_pad auto_populate="sender_signature" block_options="[]" help_text="" id="294609" initial_value="[sender_signature]" required="true" variable_name="sender_signature" variable_type="Signature Pad">sender_signature</variable_signature_pad><br />
					&nbsp;</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:314px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Signature of Authorized Person</strong></span></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:314px;"><variable_string auto_populate="recipient_manager_first_name" block_options="[]" help_text="" id="294602" initial_value="[manager first name]" required="true" variable_name="Manager first name" variable_type="String">Manager first name</variable_string><variable_string auto_populate="recipient_manager_last_name" block_options="[]" help_text="" id="294603" initial_value="[manager last name]" required="true" variable_name="Manager last name" variable_type="String">Manager last name</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:314px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>Name of Authorized Person (print)</strong></span></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p>&nbsp;&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Signed, sealed and delivered by&nbsp;</strong></span><variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="294582" initial_value="[first name]" required="true" variable_name="Employee first name" variable_type="String">Employee first name</variable_string><variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="294583" initial_value="[last name]" required="true" variable_name="Employee last name" variable_type="String">Employee last name</variable_string></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:318px;"><br />
					<variable_signature_pad auto_populate="recipient_signature" block_options="[]" help_text="" id="294608" initial_value="[recipient_signature]" required="true" variable_name="recipient_signature" variable_type="Signature Pad">recipient_signature</variable_signature_pad><br />
					&nbsp;</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:318px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Signature of&nbsp;</strong></span><variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="294582" initial_value="[first name]" required="true" variable_name="Employee first name" variable_type="String">Employee first name</variable_string><variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="294583" initial_value="[last name]" required="true" variable_name="Employee last name" variable_type="String">Employee last name</variable_string></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>SCHEDULE A</strong><br />
		<br />
		<strong>Terms of Employment</strong><br />
		&nbsp;&nbsp;</p>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:239px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employee Name:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:402px;"><variable_string auto_populate="recipient_first_name" block_options="[]" help_text="" id="294582" initial_value="[first name]" required="true" variable_name="Employee first name" variable_type="String">Employee first name</variable_string><variable_string auto_populate="recipient_last_name" block_options="[]" help_text="" id="294583" initial_value="[last name]" required="true" variable_name="Employee last name" variable_type="String">Employee last name</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:239px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employee address:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:402px;"><variable_string auto_populate="recipient_address_line_1" block_options="[]" help_text="" id="294593" initial_value="[address line 1]" required="true" variable_name="Employee address line 1" variable_type="String">Employee address line 1</variable_string><variable_string auto_populate="recipient_address_city" block_options="[]" help_text="" id="294595" initial_value="[city]" required="true" variable_name="Employee address city" variable_type="String">Employee address city</variable_string><variable_string auto_populate="recipient_address_postcode" block_options="[]" help_text="" id="294597" initial_value="[postcode]" required="true" variable_name="Employee address postcode" variable_type="String">Employee address postcode</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:239px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Commencement Date:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:402px;"><variable_date auto_populate="recipient_start_date" block_options="[]" help_text="" id="294592" initial_value="[start date]" required="true" variable_name="Employee start date" variable_type="Date">Employee start date</variable_date></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:240px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Original Commencement Date:</strong></span></td>
					<td class="table-cell" style="width:401px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294623" initial_value="DD/MM/YYYY" required="false" variable_name="DD/MM/YYYY" variable_type="String">DD/MM/YYYY</variable_string><variable_string auto_populate="" block_options="[]" help_text="" id="294638" initial_value="Include this row only for existing employees, delete row for new employees" required="false" variable_name="Include this row only for existing employees, delete row for new employees" variable_type="String">Include this row only for existing employees, delete row for new employees</variable_string></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<figure>
		<table class="table">
			<tbody>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Position Title:</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_job_title" block_options="[]" help_text="" id="294585" initial_value="[job title]" required="true" variable_name="Employee job title" variable_type="String">Employee job title</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employment Category:</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_select auto_populate="" block_options="[{&quot;id&quot;:40640,&quot;option&quot;:&quot;Permanent&quot;},{&quot;id&quot;:40639,&quot;option&quot;:&quot;Temporary&quot;}]" help_text="" id="294624" initial_value="Permanent" required="false" variable_name="Permanent" variable_type="Select">Permanent</variable_select><variable_string auto_populate="" block_options="[]" help_text="" id="265723" initial_value="" required="false" variable_name="Temporary DD/MM/YYYY - DD/MM/YYYY" variable_type="String">Temporary DD/MM/YYYY - DD/MM/YYYY</variable_string><br />
					<variable_string auto_populate="" block_options="[]" help_text="" id="294639" initial_value=" If the employee is Temporary, please specify the duration of employment here e.g. Temporary 26/10/2012 – 26/12/2012" required="false" variable_name=" If the employee is Temporary, please specify the duration of employment here e.g. Temporary 26/10/2012 – 26/12/2012" variable_type="String">If the employee is Temporary, please specify the duration of employment here e.g. Temporary 26/10/2012 &ndash; 26/12/2012</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Employment Capacity:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_employment_type" block_options="[]" help_text="" id="294586" initial_value="[full time \ part time \ casual]" required="true" variable_name="Employee employment type" variable_type="String">Employee employment type</variable_string><variable_string auto_populate="" block_options="[]" help_text="" id="294640" initial_value=" If the employee is Part-time, please change the hours in this field to reflect the working hours e.g. Monday-Tuesday 9am-2pm" required="false" variable_name=" If the employee is Part-time, please change the hours in this field to reflect the working hours e.g. Monday-Tuesday 9am-2pm" variable_type="String"> If the employee is Part-time, please change the hours in this field to reflect the working hours e.g. Monday-Tuesday 9am-2pm</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Working Hours</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_hours_per_week" block_options="[]" help_text="" id="294590" initial_value="[hours per week]" required="true" variable_name="Employee hours per week" variable_type="String">Employee hours per week</variable_string>, to be worked within the standard hours of 8:00am-6:00pm Monday to Friday unless otherwise agreed</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Place of work:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_location" block_options="[]" help_text="" id="294589" initial_value="[location]" required="true" variable_name="Employee locations" variable_type="String">Employee locations</variable_string><variable_string auto_populate="" block_options="[]" help_text="" id="266603" initial_value="Please type in the full street address" required="false" variable_name="Please type in the full street address" variable_type="String">Please type in the full street address</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Reporting to:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_manager_job_title" block_options="[]" help_text="" id="294591" initial_value="[manager job title]" required="true" variable_name="Employee manager job title" variable_type="String">Employee manager job title</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Award</strong></span></td>
					<td class="table-cell" style="width:398px;">&nbsp;​​​​​​<variable_select auto_populate="" block_options="[{&quot;id&quot;:40643,&quot;option&quot;:&quot;Professional Employees Award 2010&quot;},{&quot;id&quot;:40642,&quot;option&quot;:&quot;None&quot;},{&quot;id&quot;:40641,&quot;option&quot;:&quot;Clerks Private Sector Award 2010&quot;}]" help_text="" id="294625" initial_value="Professional Employees Award 2010" required="false" variable_name="Professional Employees Award 2010" variable_type="Select">Professional Employees Award 2010</variable_select></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Award Classification:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_select auto_populate="" block_options="[{&quot;id&quot;:40648,&quot;option&quot;:&quot;Level 1&quot;},{&quot;id&quot;:40647,&quot;option&quot;:&quot;Level 2&quot;},{&quot;id&quot;:40646,&quot;option&quot;:&quot;Level 3&quot;},{&quot;id&quot;:40645,&quot;option&quot;:&quot;Level 4&quot;},{&quot;id&quot;:40644,&quot;option&quot;:&quot;None&quot;}]" help_text="" id="294626" initial_value="Level 1" required="false" variable_name="Level 1" variable_type="Select">Level 1</variable_select></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Base Salary:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_salary" block_options="[]" help_text="" id="294587" initial_value="[salary]" required="true" variable_name="Employee salary" variable_type="String">Employee salary</variable_string><variable_string auto_populate="" block_options="[]" help_text="" id="266602" initial_value="per annum" required="false" variable_name="per annum" variable_type="String">per annum</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Base Salary payment frequency:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;">&nbsp;Fortnightly</td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Superannuation</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_super_amount" block_options="[]" help_text="" id="294599" initial_value="[super amount]" required="true" variable_name="Employee super amount" variable_type="String">Employee super amount</variable_string><variable_string auto_populate="" block_options="[]" help_text="" id="266602" initial_value="per annum" required="false" variable_name="per annum" variable_type="String">per annum</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Superannuation payment frequency:</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="" block_options="[]" help_text="" id="271056" initial_value="Quarterly" required="false" variable_name="Quarterly" variable_type="String">Quarterly</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><variable_select auto_populate="" block_options="[{&quot;id&quot;:40650,&quot;option&quot;:&quot;Variable Rewards:&quot;},{&quot;id&quot;:40649,&quot;option&quot;:&quot;Allowance&quot;}]" help_text="" id="294632" initial_value="Variable Rewards:" required="false" variable_name="Variable Rewards:" variable_type="Select">Variable Rewards:</variable_select><span style="color:#fff;">&nbsp;</span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="" block_options="[]" help_text="" id="294629" initial_value="n/a (or define)" required="false" variable_name="n/a (or define)" variable_type="String">n/a (or define)</variable_string></td>
				</tr>
				<tr>
					<td class="table-cell" style="width:243px;background-color:rgb(51, 102, 153);"><span style="color:#fff;"><strong>&nbsp;Total Remuneration:&nbsp;</strong></span></td>
					<td class="table-cell" style="width:398px;"><variable_string auto_populate="recipient_salary_inc_super" block_options="[]" help_text="" id="294600" initial_value="[salary+super]" required="true" variable_name="Employee salary incl super" variable_type="String">Employee salary incl super</variable_string><variable_string auto_populate="" block_options="[]" help_text="" id="266602" initial_value="per annum" required="false" variable_name="per annum" variable_type="String">per annum</variable_string></td>
				</tr>
			</tbody>
		</table>
		</figure>
		
		<p><br />
		<strong>SCHEDULE B</strong><br />
		<strong>Position Description and Duties</strong><br />
		Refer attached.<br />
		<br />
		&nbsp; <strong>SCHEDULE C</strong><br />
		<strong>Sales Incentive Plan</strong><br />
		<variable_string auto_populate="" block_options="[]" help_text="" id="294630" initial_value="[insert relevant commission or variable reward scheme, or delete this page entirely]" required="false" variable_name="[insert relevant commission or variable reward scheme, or delete this page entirely]" variable_type="String">[insert relevant commission or variable reward scheme, or delete this page entirely]</variable_string><br />
		<br />
		​​​​​<strong>SCHEDULE D</strong><br />
		<strong>Sales Target</strong><br />
		<variable_string auto_populate="" block_options="[]" help_text="" id="261078" initial_value="Include this only if relevant to the employee’s position, otherwise delete whole schedule" required="false" variable_name="Include this only if relevant to the employee’s position, otherwise delete whole schedule" variable_type="String">Include this only if relevant to the employee&rsquo;s position, otherwise delete whole schedule</variable_string><br />
		<br />
		<br />
		<strong>SCHEDULE E</strong><br />
		<strong>Special Conditions for Sponsored Employees</strong><br />
		<variable_string auto_populate="" block_options="[]" help_text="" id="265724" initial_value="Include this only if the employee is being sponsored, otherwise delete this entire Schedule E" required="false" variable_name="Include this only if the employee is being sponsored, otherwise delete this entire Schedule E" variable_type="String">Include this only if the employee is being sponsored, otherwise delete this entire Schedule E</variable_string><br />
		<strong>Sponsorship Arrangement</strong><br />
		<br />
		A. Pursuant to clause&nbsp;<variable_string auto_populate="" block_options="[]" help_text="" id="271055" initial_value="3.1.1.4" required="false" variable_name="3.1.1.4" variable_type="String">3.1.1.4</variable_string>, and in addition to other conditions set out in the Agreement, your employment with us is conditional upon you successfully obtaining a Subclass 457 Visa, or Temporary Skilled Shortage (TSS) Visa, or approval of a nomination application to transfer from your previous sponsor (&ldquo;Temporary Work Visa&rdquo;):<br />
		<br />
		B. AC3 will assist you in obtaining a Temporary Work Visa or nomination transfer.<br />
		<br />
		C. You agree to co-operate with us and/or our migration service provider to assist you to apply for a Temporary Work Visa, or nomination transfer.<br />
		<br />
		D. You acknowledge and agree:&nbsp;</p>
		
		<ol start="1" style="list-style-type:lower-roman;">
			<li>to supply information and documentation as required by AC3 for auditing or reporting to Australian immigration authorities including information and documentation in relation to maintenance of appropriate health insurance / Medicare coverage for you and any accompanying family, if relevant; and,</li>
			<li>that by signing this Agreement you consent to AC3 liaising with Australian immigration authorities, and authorize the use of the Visa Entitlement Verification online facility, from time to time to confirm your immigration status and AC3&rsquo;s continuing obligations.</li>
		</ol>
		
		<p>E. You must strictly comply with all of the conditions of your Temporary Work Visa and immediately inform AC3 of any changes to your visa status.<br />
		<br />
		F. If your Temporary Work Visa expires or is cancelled for any reason, your employment will automatically terminate. AC3 is under no obligation to sponsor you (or any family member) for another visa, or pay any compensation as a result of such expiry or cancellation.<br />
		<br />
		G. (If applicable) You agree to notify AC3 within a reasonable period should your relationship with your sponsored partner break down, and acknowledge that AC3 will notify Australian immigration authorities within a reasonable period that your partner is no longer sponsored by AC3 for Temporary Work Visa purposes.<br />
		<br />
		H. Subject to any lawful arrangements you make with Australian Immigration authorities to remain in Australia, you agree to immediately leave Australia with sponsored family members upon termination of your employment with the Company.<br />
		<br />
		I. Subject to any lawful arrangements you make with Australian immigration authorities, you irrevocably and unconditionally agree to indemnify AC3 against any loss suffered arising out of failure by you or any accompanying family to leave Australia following termination of your employment under this Agreement.<br />
		<br />
		<strong>Nomination for Permanent Residence</strong><br />
		J. If you are employed by AC3 for a term of two (2) or more years, are otherwise eligible, and wish to remain in Australia as a permanent, full time employee, AC3 may choose, at its absolute discretion, to nominate you for employer sponsored permanent residence (&ldquo;Permanent Work Visa&rdquo;). You acknowledge however, that AC3 cannot guarantee that the Permanent Work Visa will be granted, as that decision is made by the Australian immigration authorities.<br />
		<br />
		K. You agree to use our preferred migration service provider to assist you apply for your Permanent Work Visa, unless otherwise authorised by us in writing.<br />
		<br />
		<strong>Nomination, Visa and Related Costs</strong><br />
		<br />
		L. AC3 may incur a range of costs on your behalf in relation to a Temporary Work Visa and/or a Permanent Work Visa. You agree that such costs are not recruitment or inducements to attract you to the role and do not form any part of your remuneration. You also acknowledge that under the Migration Regulations 1994, AC3 is not obliged to pay costs directly relating to your Temporary Work Visa, and can lawfully require you to pay such costs, or recover these from you.<br />
		M. If you are not granted a Temporary Work Visa, or your employment is terminated at either party&rsquo;s initiative at any time for any reason within&nbsp;<variable_string auto_populate="" block_options="[]" help_text="" id="294633" initial_value="two (2) years" required="false" variable_name="two (2) years" variable_type="String">two (2) years</variable_string>of you obtaining a Temporary Work Visa sponsored by AC3, you agree to repay:&nbsp;any applicable Visa Application Charge/s (VAC), Subsequent Temporary Visa Application Charge/s (STAC), credit card sur/charges, and associated migration agent fees for the visa application stage;<br />
		&nbsp;all reasonable additional costs incurred to process and/or support you and/or your family members&rsquo; visa application/s; and,<br />
		&nbsp;any airfares, travel and relocation expenses incurred in bringing you and/or any family members relocating to take up this position.N. If you are not granted a Permanent Work Visa, or your employment is terminated at either party&rsquo;s initiative at any time for any reason within&nbsp;<variable_string auto_populate="" block_options="[]" help_text="" id="294633" initial_value="two (2) years" required="false" variable_name="two (2) years" variable_type="String">two (2) years</variable_string>of you obtaining a Permanent Work Visa sponsored by AC3, you agree to repay:&nbsp;</p>
		
		<p>Two years assumes a single visa applicant. If a family or more than 1 visa applicant, period may need to be longer to claw back costs associated (should be discussed with SX and agreed on case-by-case basis)</p>
		
		<p>&nbsp;any Nomination and Visa Application charges, credit card sur/charges and associated migration agent fees;<br />
		&nbsp;all reasonable additional costs incurred to process and/or support the nomination for you and if relevant, your family members&rsquo; visa application; and,<br />
		&nbsp;any airfares, travel and relocation expenses incurred in bringing you and/or any family members relocating to take up this position.O. You agree that this Agreement does not create an obligation on AC3 to nominate you for employer sponsored permanent residence. Nor does this require you to pay or repay any recruitment expenses or migration related costs associated with Sponsorship and Nomination stages of a temporary work visa.<br />
		P. You agree that any repayments you are required to make with respect of a temporary or permanent work nomination or visa may be set off against any amounts AC3 owes to you at the date of termination or earlier, except for amounts AC3 is not entitled by law to set off. You agree such a deductions are both reasonably and principally for your benefit taking into account:<br />
		&nbsp;&nbsp;i. the fact AC3 was not obliged to incur the costs originally but did so for your benefit;&nbsp;<br />
		&nbsp; ii. this deduction facility allows AC3 to have the confidence to incur the costs for your benefit, without being put to unnecessary expense to recover any repayable amount; and<br />
		&nbsp; iii. simplifies the repayment process for you.</p>
		
		<p><br />
		Other</p>
		
		<p>Q. If at any stage during the period of your Temporary Work Visa you intend to seek permanent residence in Australia other than by being nominated by AC3, you will notify AC3 of your intention to do so prior to any permanent residence application being lodged with the immigration authorities and, if relevant, within five (5) days of your being notified of the outcome of any such application.<br />
		<br />
		Indemnity<br />
		R. As part of your Temporary Work Visa application process, you and all secondary visa applicants, are required to meet prescribed health criteria. &nbsp;Should any applicant fail to meet the health criteria, it is open for AC3 - in its absolute discretion - to sign a &ldquo;Nominator&rsquo;s Undertaking&rdquo; with the Commonwealth of Australia to meet any realised costs associated with healthcare and community services relating to the identified disease or condition.&nbsp;<br />
		S. In the event that AC3 exercises its discretion to sign a Nominator&rsquo;s Undertaking under this part: &nbsp;<br />
		&nbsp; i. you irrevocably and unconditionally indemnify and hold harmless AC3 for all liability, costs and expenses arising directly or indirectly out of any claim made by the Commonwealth of Australia in pursuance of costs the subject of the Nominator&rsquo;s Undertaking; and,<br />
		&nbsp; ii. you will pay to AC3, immediately upon demand, the amount of any costs incurred by us relating to, or arising from the Nominator&rsquo;s Undertaking mentioned in paragraph (i).</p>
		</contract_block></contract_section>
        `);
	})
	.catch(error => {
		console.error(error.stack);
	});
