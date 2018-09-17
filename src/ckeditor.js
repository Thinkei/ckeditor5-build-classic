// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

import ContractBlock from "./plugins/contract_block";
import ContractSection from "./plugins/contract_section";
import VariableString from "./plugins/variable_string";
import VariableSelect from "./plugins/variable_select";
import VariableDate from "./plugins/variable_date";
import VariableSignature from "./plugins/variable_signature_pad";
import VariableImage from "./plugins/variable_image";

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
	// Link,
	List,
	Paragraph,
	ContractBlock,
	ContractSection,
	VariableString,
	VariableSelect,
	VariableDate,
	VariableSignature,
	VariableImage
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			// 'link',
			"bulletedList",
			"numberedList",
			"imageUpload",
			"blockQuote",
			"undo",
			"redo",
			"addBlock",
			"addVarString",
			"addVarSelect",
			"addVarDate",
			"addVarSignature",
			"addVarImage"
		]
	},
	image: {
		toolbar: [
			"imageStyle:full",
			"imageStyle:side",
			"|",
			"imageTextAlternative"
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en"
};
