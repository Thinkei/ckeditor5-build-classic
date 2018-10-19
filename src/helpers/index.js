import { contractSectionConverterHelper } from './contract_section';
import { variableStringConverterHelper } from './variable_string';
import { variableImageConverterHelper } from './variable_image';
import { variableDateConverterHelper } from './variable_date';
import { variableSignaturePadConverterHelper } from './variable_signature_pad';
import { variableSelectConverterHelper } from './variable_select';
import { sectionTitleConverterHelper } from './section_title';
import { contractBlockConverterHelper } from './contract_block';
import { spanConverterHelper } from './span';
import { paragraphConverterHelper } from './paragraph';

export const addConverterHelpers = editor => {
	contractBlockConverterHelper(editor);
	contractSectionConverterHelper(editor);
	variableStringConverterHelper(editor);
	variableImageConverterHelper(editor);
	variableDateConverterHelper(editor);
	variableSignaturePadConverterHelper(editor);
	variableSelectConverterHelper(editor);
	sectionTitleConverterHelper(editor);
	spanConverterHelper(editor);
	paragraphConverterHelper(editor);
};
