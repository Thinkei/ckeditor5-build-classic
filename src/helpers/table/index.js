import { converterHelperTemplate } from '../converter_template';

export const tableConverterHelper = editor => {
	converterHelperTemplate(editor, 'table');
	converterHelperTemplate(editor, 'tbody');
	converterHelperTemplate(editor, 'tr');
	converterHelperTemplate(editor, 'td');
};
