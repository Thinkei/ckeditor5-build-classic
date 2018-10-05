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
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'insertTable',
			'blockQuote',
			'undo',
			'redo',
			'|',
			'save',
			'openEditContractModal',
			'openVariableManagerSidebar',
			'openTutorialScreen',
			'|',
			'addBlock'
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
		<contract_section hide_title="false" hide_title_in_document="false" id="818206" is_show="true" optional="false" premium="false"
			title="Logo">
				<contract_block block_group="" id="2000928" optional="false" probation="false" visible="true">
				<p>
				<variable_image auto_populate="" block_options="[]" help_text="" id="171559" initial_value="Logo" required="true" variable_name="logo"
					variable_type="Image">logo</variable_image>
				This text is just for testing
			</p></contract_block>
		`);
	})
	.catch(error => {
		console.error(error.stack);
	});
