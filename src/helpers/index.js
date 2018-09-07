import { contractSectionConverterHelper } from './contract_section';
import { variableStringConverterHelper } from './variable_string';
import { variableImageConverterHelper } from './variable_image';
import { variableDateConverterHelper } from './variable_date';
import { variableSignaturePadConverterHelper } from './variable_signature_pad';
import { variableSelectConverterHelper } from './variable_select';
import { tableConverterHelper } from './table';
import { sectionTitleConverterHelper } from './section_title';

export const addConverterHelpers = editor => {
	contractSectionConverterHelper(editor);
	variableStringConverterHelper(editor);
	variableImageConverterHelper(editor);
	variableDateConverterHelper(editor);
	variableSignaturePadConverterHelper(editor);
	variableSelectConverterHelper(editor);
	tableConverterHelper(editor);
	sectionTitleConverterHelper(editor);
};
