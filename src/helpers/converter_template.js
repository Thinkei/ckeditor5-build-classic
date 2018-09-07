import { upcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import { downcastElementToElement } from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

import { toBool } from '../plugins/contract_block/utils';

const mapModelToHTML = {
	contract_section: 'section',
	contract_block: 'section',
	section_title: 'p',
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
const sectionTitle = 'sectionTitle';

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

const createSectionTitleElement = (viewWriter, modelElement, htmlTagName) => {
	const sectionTitleElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	viewWriter.setCustomProperty(sectionTitle, true, sectionTitleElement);
	return sectionTitleElement;
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
					case 'section_title': {
						return createSectionTitleElement(
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
			converterPriority: 'highest'
		})
	);
};
