import { variableStringUpcast } from './variableStringUpcast';
import { variableStringDowncast } from './variableStringDowncast';

export const variableStringConverterHelper = editor => {
	variableStringUpcast(editor);
	variableStringDowncast(editor);
};
