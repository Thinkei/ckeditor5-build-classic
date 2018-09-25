import ViewPosition from '@ckeditor/ckeditor5-engine/src/view/position';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import { toBool } from '../plugins/contract_block/utils';

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

const toVariableWidget = (viewElement, viewWriter) => {
	return toWidget(viewElement, viewWriter);
};

const BLOCK_ELEMENT = 'blockElement';
const SECTION_TITLE = 'sectionTitle';
const SECTION_ELEMENT = 'sectionElement';

export function createBlockElement(viewWriter, modelElement, htmlTagName) {
	const blockElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	viewWriter.setCustomProperty(BLOCK_ELEMENT, true, blockElement);
	if (toBool(blockElement.getAttribute('optional')))
		viewWriter.addClass('contract-block', blockElement);
	else viewWriter.addClass('contract-block-dotted', blockElement);

	return blockElement;
}

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

// create view variable element
export const createViewVariableElement = (
	viewWriter,
	modelElement,
	htmlTagName,
	iconClassName
) => {
	const viewElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	if (!viewElement.hasClass(modelElement.name)) {
		viewElement._addClass(modelElement.name);
	}

	if (iconClassName) {
		const position = ViewPosition.createAt(viewElement, 'end');
		const iconElement = viewWriter.createEmptyElement('i', {
			class: iconClassName
		});
		viewWriter.insert(position, iconElement);
	}
	return toVariableWidget(viewElement, viewWriter);
};
