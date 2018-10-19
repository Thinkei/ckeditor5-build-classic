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
		<contract_section hide_title="true" hide_title_in_document="false" id="1160856" is_show="true" optional="true" premium="false" title="Section 0"><contract_block block_group="" id="2837508" optional="false" probation="false" visible="true">
<p>Version 2<br />
Thanks for downloading this placeholder from Employment Hero about important company information that everybody at Intersect needs to read and acknowledge. Hero only offers attachments and does not understand web content so we ask that you please use the URL(s) published here to access the linked information and follow the procedure below to confirm<variable_string auto_populate="" block_options="[]" help_text="" id="263838" initial_value="" required="false" variable_name="yeh" variable_type="String">yeh</variable_string>&nbsp;within Employment Hero.<br />
<br />
Title:<br />
Intersect Code of Conduct<br />
<br />
Access:<br />
<a href="http://intersect.org.au/code">http://intersect.org.au/code&nbsp;</a><br />
<br />
This canonical link will always point to the up to date Code of Conduct (&ldquo;the Code&rdquo;) currently hosted on wiki.intersect.org.au and publicly accessible.<br />
<br />
Purpose:<br />
The Code provides an ethical framework to guide your decisions, actions and behaviours whenever and wherever they relate to your work and responsibilities at Intersect. It will assist you when making judgements about how to deal with various situations that you may encounter.<br />
<br />
Reason for distribution:<br />
The Code of Conduct aims to clearly outline the standards of behaviour and conduct that are expected of you during your association with Intersect. All personnel are required to acknowledge they have received, read and understood this information.<br />
<br />
Legal status:<br />
To satisfy the lawyers, agreement to abide by the Code of Conduct is an integral component of your employment contract or professional services agreement. If changes are made to the Code or it is reissued for any reason you will be advised and requested to read and acknowledge it again.<br />
Acknowledgement: Once you&rsquo;ve read the Code, please check the Employment Hero acknowledgement box stating &ldquo;I acknowledge and agree with the details of this policy&rdquo;. By doing this you enable us to use an online system rather than paper and signature. Revised: This document was last updated on 27 February 2018</p>
</contract_block><contract_block block_group="" id="2837509" optional="false" probation="false" visible="true">
<p>&nbsp;&nbsp;</p>
<contract_block block_group="" id="2837197" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837198" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837199" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837200" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837201" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837202" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837203" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837204" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837205" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837206" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837207" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837208" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837209" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837210" optional="false" probation="false" visible="true">
<p><strong>List of duties</strong></p>
<contract_block block_group="" id="2837211" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837212" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837213" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837214" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837215" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837216" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837217" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837218" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837219" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837220" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837221" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837222" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837223" optional="false" probation="false" visible="true"></contract_block><contract_block block_group="" id="2837224" optional="false" probation="false" visible="true">
<p>kkjh;kh;kh;h;bhb<br />
<br />
Select an item:&nbsp;</p>

<p><variable_select auto_populate="" block_options="[{&quot;id&quot;:40204,&quot;option&quot;:&quot;option 3&quot;},{&quot;id&quot;:40203,&quot;option&quot;:&quot;option 2&quot;},{&quot;id&quot;:40202,&quot;option&quot;:&quot;option 1&quot;}]" help_text="" id="291640" initial_value="[select an item]" required="false" variable_name="field name" variable_type="Select">field name</variable_select><br />
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
&nbsp;</p>
</contract_block></contract_block></contract_block></contract_section>
    `);
	})
	.catch(error => {
		console.error(error.stack);
	});
