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
		editor.setData(`
		<contract_section hide_title="true" hide_title_in_document="true" id="1160785" is_show="true" optional="true" premium="false" title="Logo"><contract_block block_group="" id="2837254" optional="false" probation="false" visible="true"><variable_image auto_populate="" block_options="[]" help_text="" id="300875" initial_value="logo" required="false" variable_name="logo" variable_type="Image">logo</variable_image></contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="true" id="1160786" is_show="true" optional="false" premium="false" title="Introduction"><contract_block block_group="" id="2837255" optional="false" probation="false" visible="true">
		<h3>Employee Wellbeing Policy</h3>
		
		<h4><b>OVERVIEW</b></h4>
		
		<p align="justify"><variable_string auto_populate="company_name" block_options="[]" help_text="Insert Company Name" id="300872" initial_value="Company Name" required="false" variable_name="Company Name" variable_type="String">Company Name</variable_string> (&ldquo;Company&rdquo;) promotes employee wellbeing and is committed to providing an environment that encourages a healthy workplace. Wellbeing is more than traditional occupational health and safety. It incorporates physical and psychological fitness that encourages individual creativity, productivity and commitment.</p>
		&nbsp;
		
		<p align="justify">Wellbeing is considered an important initiative at <variable_string auto_populate="company_name" block_options="[]" help_text="Insert Company Name" id="300872" initial_value="Company Name" required="false" variable_name="Company Name" variable_type="String">Company Name</variable_string> and we will maintain policies and procedures which enable managers and employees to balance operational requirements with employee personal needs and obligations.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="true" id="1160787" is_show="true" optional="false" premium="false" title="Scope"><contract_block block_group="" id="2837256" optional="false" probation="false" visible="true">
		<h4><b>OPERATION</b></h4>
		
		<p align="justify">The objectives, processes and responsibilities in this policy apply to all <variable_string auto_populate="company_name" block_options="[]" help_text="Insert Company Name" id="300872" initial_value="Company Name" required="false" variable_name="Company Name" variable_type="String">Company Name</variable_string> employees.</p>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="true" id="1160788" is_show="true" optional="false" premium="false" title="Objectives"><contract_block block_group="" id="2837257" optional="false" probation="false" visible="true">
		<p align="justify"><variable_string auto_populate="company_name" block_options="[]" help_text="Insert Company Name" id="300872" initial_value="Company Name" required="false" variable_name="Company Name" variable_type="String">Company Name</variable_string> aims to achieve the following objectives:</p>
		
		<ul>
			<li>A positive and engaging work environment for employees;</li>
			<li>Incorporate employee wellbeing and product safety requirements in business strategies, plans, reviews and product offerings;</li>
			<li>Foster employee engagement and provide appropriate wellbeing education to employees to enhance their ability to work safely and productively;</li>
			<li>Perform reviews, audits and self assessment of the Company&rsquo;s conformance with employee wellbeing and product safety requirements; and</li>
			<li>Provide appropriate resources to fulfil these objectives.</li>
		</ul>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="true" id="1160789" is_show="true" optional="true" premium="false" title="Well-being Programs"><contract_block block_group="" id="2837258" optional="false" probation="false" visible="true">
		<h4>WELLBEING PROGRAMS</h4>
		
		<p align="justify"><variable_string auto_populate="company_name" block_options="[]" help_text="Insert Company Name" id="300872" initial_value="Company Name" required="false" variable_name="Company Name" variable_type="String">Company Name</variable_string> maintains programs and activities to promote the wellbeing of its employees, consistent with this policy and its key objectives.</p>
		&nbsp;
		
		<p align="justify">The Company encourages work life balance by providing:</p>
		
		<ul>
			<li>flexible work arrangements;</li>
			<li>leave options;</li>
			<li>other employee benefits;</li>
		</ul>
		
		<p align="justify">that are designed to allow employees to achieve work life balance in their lives.</p>
		</contract_block><contract_block block_group="" id="2837259" optional="true" probation="false" visible="true">
		<p align="justify">Furthermore, the Company offers employees the following health and related benefits:</p>
		&nbsp;
		
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="For example: Yoga and exercise classes are offered at a range of times and days throughout the week to encourage all employees to participate." id="300873" initial_value="Insert additional health and related benefits here. If there aren't any, close this optional clause." required="false" variable_name="Well being list one" variable_type="String">Well being list one</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837260" optional="true" probation="false" visible="true">
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="For example: Health and fitness assessments are offered to all employees by an in-house Personal Trainer." id="300874" initial_value="Insert additional health and related benefits here. If there aren't any, close this optional clause." required="false" variable_name="Well being list two" variable_type="String">Well being list two</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837261" optional="true" probation="false" visible="true">
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="For example: Employees are invited to have a drink and relax in the Employee Lounge at the end of their working day. " id="300876" initial_value="Insert additional health and related benefits here. If there aren't any, close this optional clause." required="false" variable_name="Well being list three" variable_type="String">Well being list three</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837262" optional="true" probation="false" visible="true">
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="For example: Counselling is provided to Employees if required. " id="300877" initial_value="Insert additional health and related benefits here. If there aren't any, close this optional clause." required="false" variable_name="Well being list four" variable_type="String">Well being list four</variable_string></li>
		</ul>
		</contract_block><contract_block block_group="" id="2837263" optional="true" probation="false" visible="true">
		<ul>
			<li><variable_string auto_populate="" block_options="[]" help_text="Ergonomic assessments are available if required." id="300878" initial_value="Insert additional health and related benefits here. If there aren't any, close this optional clause." required="false" variable_name="Well being list five" variable_type="String">Well being list five</variable_string></li>
		</ul>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="false" id="1160790" is_show="true" optional="true" premium="false" title="Conditions of Employment"><contract_block block_group="" id="2837264" optional="true" probation="false" visible="false">
		<p align="justify">The Company&#39;s Enterprise Agreement includes key elements which require the Company to actively represent and act in the best interests and wellbeing of all employees and to address concerns including work life balance opportunities, options and employee related policies.</p>
		&nbsp;
		
		<p align="justify">The Enterprise Agreement is the core company conditions of employment and includes entitlements which maintain employee wellbeing such as:</p>
		
		<ul>
			<li>Hours of work</li>
			<li>Breaks</li>
			<li>Overtime</li>
			<li>Types of leave including annual, personal/carers, sick, parental, community service leave etc.</li>
		</ul>
		</contract_block><contract_block block_group="" id="2837265" optional="true" probation="false" visible="false">
		<p align="justify">The employees contract of employment outlines the core company conditions of employment and includes entitlements which maintain employee wellbeing such as:</p>
		
		<ul>
			<li>Hours of work</li>
			<li>Breaks</li>
			<li>Overtime</li>
			<li>Types of leave including annual, personal/carers, sick, parental, community service leave etc.</li>
		</ul>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="true" id="1160791" is_show="true" optional="true" premium="false" title="Responsibilities "><contract_block block_group="" id="2837266" optional="false" probation="false" visible="true">
		<h4>RESPONSIBILITIES</h4>
		
		<p align="justify">The Company has the responsibility for the following:</p>
		
		<ul>
			<li>Reporting on the status of employee wellbeing in the business, including performance, initiatives, opportunities and activities;</li>
			<li>Regularly reviewing wellbeing programs and benefits, conditions of employment and work life balance options; and</li>
			<li>Developing policies and procedures consistent with this Employee Wellbeing Policy.</li>
		</ul>
		&nbsp;
		
		<p align="justify">Managers and Supervisors are responsible for:</p>
		
		<ul>
			<li>Acting consistently with policies, procedures, programs and activities which support employee wellbeing;</li>
			<li>Fair decision making which takes account of employees&rsquo; wellbeing as well as operational business requirements; and</li>
			<li>Supporting the implementation of the Company&#39;s well-being programs and activities, including allowing reasonable employee access to programs and benefits, encouraging employees to participate in well-being programs and activities.</li>
		</ul>
		&nbsp;
		
		<p align="justify">Employees are responsible for:</p>
		
		<ul>
			<li>Conforming with policies, procedures, programs and activities which support employee wellbeing;</li>
			<li>Supporting the Company&#39;s wellbeing policy and programs; and</li>
			<li>Taking responsibility for their own wellbeing at the workplace.</li>
		</ul>
		</contract_block></contract_section><contract_section hide_title="true" hide_title_in_document="true" id="1160792" is_show="true" optional="false" premium="false" title="Related Policies"><contract_block block_group="" id="2837267" optional="false" probation="false" visible="true">
		<h4>RELATED POLICIES</h4>
		
		<p align="justify">Polices related to this policy include:</p>
		</contract_block><contract_block block_group="" id="2837268" optional="true" probation="false" visible="true">
		<ul>
			<li>Equal Employment Opportunity, Discrimination, Bullying and Harassment Policy</li>
		</ul>
		</contract_block><contract_block block_group="" id="2837269" optional="true" probation="false" visible="true">
		<ul>
			<li>Workplace Health and Safety Policy</li>
		</ul>
		</contract_block><contract_block block_group="" id="2837270" optional="true" probation="false" visible="true">
		<ul>
			<li>Drugs and Alcohol Policy</li>
		</ul>
		</contract_block><contract_block block_group="" id="2837271" optional="true" probation="false" visible="true">&nbsp;
		<p align="justify"><variable_string auto_populate="company_name" block_options="[]" help_text="Insert Company Name" id="300872" initial_value="Company Name" required="false" variable_name="Company Name" variable_type="String">Company Name</variable_string> complies with all relevant legislation with regard to workplace health and safety.</p>
		</contract_block><contract_block block_group="" id="2837272" optional="true" probation="false" visible="true">
		<p></p>
		&nbsp;
		
		<p></p>
		&nbsp;
		
		<p></p>
		&nbsp;
		
		<p></p>
		&nbsp;
		
		<p></p>
		&nbsp;
		
		<p></p>
		&nbsp;
		
		<p><b>Last Updated:</b> 31 August 2016</p>
		&nbsp;
		
		<p></p>
		
		<p></p>
		</contract_block></contract_section>
        `);
	})
	.catch(error => {
		console.error(error.stack);
	});
