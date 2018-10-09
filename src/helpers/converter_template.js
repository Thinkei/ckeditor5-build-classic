import { upcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

import {
	createBlockElement,
	createSectionElement,
	createViewVariableElement,
	createModelElement,
	mapModelToHTML
} from './utils';

export function converterHelperTemplate(editor, htmlTagName) {
	// upcast helper
	editor.conversion.for('upcast').add(
		upcastElementToElement({
			view: viewElement => {
				if (viewElement.name === htmlTagName) {
					return Object.assign({}, viewElement);
				}
				return null;
			},
			model: (viewElement, modelWriter) => {
				switch (viewElement.name) {
					case 'variable_string':
					case 'variable_select':
					case 'variable_date':
					case 'variable_signature_pad':
					case 'variable_image':
						return createModelElement(viewElement, modelWriter);
					default:
						return modelWriter.createElement(
							viewElement.name,
							viewElement._attrs
						);
				}
			}
		})
	);
	// dataDowncast helper
	editor.conversion.for('dataDowncast').add(
		downcastElementToElement({
			model: htmlTagName,
			view: (modelElement, viewWriter) => {
				return viewWriter.createContainerElement(
					mapModelToHTML[htmlTagName],
					modelElement._attrs
				);
			}
		})
	);
	// edittingDowncast helper
	editor.conversion.for('editingDowncast').add(
		downcastElementToElement({
			model: htmlTagName,
			view: (modelElement, viewWriter) => {
				switch (modelElement.name) {
					case 'contract_block': {
						return createBlockElement(
							viewWriter,
							modelElement,
							htmlTagName
						);
					}
					case 'contract_section': {
						return createSectionElement(
							viewWriter,
							modelElement,
							htmlTagName
						);
					}
					case 'variable_string':
					case 'variable_signature_pad':
					case 'variable_image':
						return createViewVariableElement(
							viewWriter,
							modelElement,
							htmlTagName
						);
					case 'variable_select': {
						return createViewVariableElement(
							viewWriter,
							modelElement,
							htmlTagName,
							'fas fa-sort-down'
						);
					}
					case 'variable_date': {
						return createViewVariableElement(
							viewWriter,
							modelElement,
							htmlTagName,
							'fas fa-calendar-alt'
						);
					}

					default: {
						return viewWriter.createContainerElement(
							mapModelToHTML[htmlTagName],
							modelElement._attrs
						);
					}
				}
			}
		})
	);
}
