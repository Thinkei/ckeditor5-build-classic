import { toBool } from '../plugins/contract_block/utils';
import { toVariableWidget } from '../plugins/utils';

export const mapModelToHTML = {
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
const SECTION_TITLE = 'sectionTitle';
const SECTION_ELEMENT = 'sectionElement';

export const createBlockElement = (viewWriter, modelElement, htmlTagName) => {
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

export const createSectionTitleElement = (
	viewWriter,
	modelElement,
	htmlTagName
) => {
	const sectionTitleElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	viewWriter.setCustomProperty(SECTION_TITLE, true, sectionTitleElement);
	return sectionTitleElement;
};

export const createSectionElement = (viewWriter, modelElement, htmlTagName) => {
	const sectionElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	viewWriter.setCustomProperty(SECTION_ELEMENT, true, sectionElement);
	return sectionElement;
};

export const createVarStringElement = (
	viewWriter,
	modelElement,
	htmlTagName
) => {
	const viewElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);
	return toVariableWidget(viewElement, viewWriter);
};
