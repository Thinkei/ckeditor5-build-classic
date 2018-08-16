import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

export const contractBlockDowncast = editor => {
	editor.conversion.for('downcast').add(
		downcastElementToElement({
			model: 'contract_block',
			view: (modelElement, viewWriter) => {
				return viewWriter.createContainerElement(
					'h2',
					modelElement._attrs
				);
			}
		})
	);
};
