import { upcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';

export const contractSectionUpcast = editor => {
	editor.conversion.for('upcast').add(
		upcastElementToElement({
			view: viewElement => {
				if (viewElement.name === 'contract_section') {
					return {
						...viewElement
					};
				}
				return null;
			},
			model: (viewElement, modelWriter) => {
				return modelWriter.createElement(
					viewElement.name,
					viewElement._attrs
				);
			}
		})
	);
};
