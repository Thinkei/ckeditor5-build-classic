import { contractSectionConverterHelper } from './contract_section';
import { contractBlockConverterHelper } from './contract_block';
import { variableStringConverterHelper } from './variable_string';

export const addConverterHelpers = editor => {
	contractSectionConverterHelper(editor);
	contractBlockConverterHelper(editor);
	variableStringConverterHelper(editor);
};
