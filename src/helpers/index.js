import { contractSectionConverterHelper } from './contract_section';
import { contractBlockConverterHelper } from './contract_block';
import { variableStringConverterHelper } from './variable_string';
import { variableImageConverterHelper } from './variable_image';
import { variableDateConverterHelper } from './variable_date';
import { variableSignaturePadConverterHelper } from './variable_signature_pad';
import { variableSelectConverterHelper } from './variable_select';

export const addConverterHelpers = editor => {
	contractSectionConverterHelper(editor);
	contractBlockConverterHelper(editor);
	variableStringConverterHelper(editor);
	variableImageConverterHelper(editor);
	variableDateConverterHelper(editor);
	variableSignaturePadConverterHelper(editor);
	variableSelectConverterHelper(editor);
};
