import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

export const variableStringDowncast = editor => {
	editor.conversion.for('downcast').add(
		downcastElementToElement({
			model: 'variable_string',
			view: (modelElement, viewWriter) => {
				return viewWriter.createContainerElement(
					'h3',
					modelElement._attrs
				);
			}
		})
	);
};
