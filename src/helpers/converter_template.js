import { upcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

import {
	createBlockElement,
	createSectionElement,
	createSectionTitleElement,
	createViewVariableElement,
	mapModelToHTML
} from './utils';

export function converterHelperTemplate(editor, htmlTagName) {
	// upcast helper
	editor.conversion.for('upcast').add(
		upcastElementToElement({
			view: viewElement => {
				if (viewElement.name === htmlTagName) {
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
					case 'section_title': {
						return createSectionTitleElement(
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
					case 'variable_string': {
						return createViewVariableElement(
							viewWriter,
							modelElement,
							htmlTagName
						);
					}
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
					case 'variable_signature_pad': {
						return createViewVariableElement(
							viewWriter,
							modelElement,
							htmlTagName
						);
					}
					case 'variable_image': {
						return createViewVariableElement(
							viewWriter,
							modelElement,
							htmlTagName
						);
					}
					default: {
						return viewWriter.createContainerElement(
							mapModelToHTML[htmlTagName],
							modelElement._attrs
						);
					}
				}
			},
			converterPriority: 'high'
		})
	);
}
