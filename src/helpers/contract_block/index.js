import { contractBlockUpcast } from './contractBlockUpcast';
import { contractBlockDowncast } from './contractBlockDowncast';

export const contractBlockConverterHelper = editor => {
	contractBlockUpcast(editor);
	contractBlockDowncast(editor);
};
