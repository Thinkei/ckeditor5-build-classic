import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

export const contractSectionDowncast = editor => {
	editor.conversion.for('downcast').add(
		downcastElementToElement({
			model: 'contract_section',
			view: (modelElement, viewWriter) => {
				return viewWriter.createContainerElement(
					'h1',
					modelElement._attrs
				);
			}
		})
	);
};
