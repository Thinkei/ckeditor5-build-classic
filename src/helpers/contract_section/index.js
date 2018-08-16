import { contractSectionUpcast } from './contractSectionUpcast';
import { contractSectionDowncast } from './contractSectionDowncast';

export const contractSectionConverterHelper = editor => {
	contractSectionUpcast(editor);
	contractSectionDowncast(editor);
};
