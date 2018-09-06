import { upcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

import { toBool } from '../plugins/contract_block/utils';

const mapModelToHTML = {
	contract_section: 'section',
	contract_block: 'section',
	variable_string: 'span',
	variable_image: 'span',
	variable_date: 'span',
	variable_signature_pad: 'span',
	variable_select: 'span',
	table: 'table',
	tbody: 'tbody',
	tr: 'tr',
	td: 'td'
};

const blockElementSymbol = 'blockElement';
const sectionElementSymbol = 'sectionElement';

// TODO: handle this for editing downcast later
const createSectionElement = (viewWriter, modelElement, htmlTagName) => {
	const sectionElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	viewWriter.setCustomProperty(sectionElementSymbol, true, sectionElement);
	if (
		!toBool(sectionElement.getAttribute('hide_title')) &&
		!toBool(sectionElement.getAttribute('hide_title_in_document'))
	) {
		const p = modelWriter.createContainerElement('paragraph', {
			id: sectionElement.getAttribute('id')
		});
		modelWriter.append(
			modelWriter.createText(sectionElement.getAttribute('title')),
			p
		);
		modelWriter.insert(p, sectionElement, 'before');
	}

	return sectionElement;
};

const createBlockElement = (viewWriter, modelElement, htmlTagName) => {
	const blockElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	viewWriter.setCustomProperty(blockElementSymbol, true, blockElement);
	if (toBool(blockElement.getAttribute('optional')))
		viewWriter.addClass('contract-block', blockElement);
	else viewWriter.addClass('contract-block-dotted', blockElement);

	return blockElement;
};

export const converterHelperTemplate = (editor, htmlTagName) => {
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
					// case 'contract_section': {
					// 	return createSectionElement(
					// 		viewWriter,
					// 		modelElement,
					// 		htmlTagName
					// 	);
					// }
					default:
						return viewWriter.createContainerElement(
							mapModelToHTML[htmlTagName],
							modelElement._attrs
						);
				}
			}
		})
	);
};
