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
	span: 'span',
	paragraph: 'p'
};

const toVariableWidget = (viewElement, viewWriter) => {
	return toWidget(viewElement, viewWriter);
};

const BLOCK_ELEMENT = 'blockElement';
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

export const createSectionElement = (viewWriter, modelElement, htmlTagName) => {
	const sectionElement = viewWriter.createContainerElement(
		mapModelToHTML[htmlTagName],
		modelElement._attrs
	);

	if (
		!toBool(sectionElement.getAttribute('hide_title')) ||
		!toBool(sectionElement.getAttribute('hide_title_in_document'))
	) {
		viewWriter.addClass('section-title', sectionElement);
	}

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

export const createModelElement = (viewElement, modelWriter) => {
	if (!viewElement.getChild(0)) {
		if (viewElement.getAttribute('variable_name')) {
			const modelElement = modelWriter.createElement(
				viewElement.name,
				viewElement._attrs
			);
			modelWriter.insertText(
				viewElement.getAttribute('variable_name'),
				modelElement,
				'end'
			);
			return modelElement;
		}
	} else {
		return modelWriter.createElement(viewElement.name, viewElement._attrs);
	}
};

export const createParagraphModelElement = (viewElement, modelWriter) => {
	const paragraph = modelWriter.createElement(
		'paragraph',
		viewElement._attrs
	);

	modelWriter.setAttribute('classes', viewElement._classes, paragraph);
	modelWriter.setAttribute('styles', viewElement._styles, paragraph);

	return paragraph;
};

export const createParagraphViewElement = (modelElement, viewWriter) => {
	const paragraph = viewWriter.createContainerElement('p', null);

	if (modelElement.getAttribute('classes')) {
		modelElement.getAttribute('classes').forEach((key, value) => {
			viewWriter.addClass(key, paragraph);
		});
	}

	if (modelElement.getAttribute('styles')) {
		modelElement.getAttribute('styles').forEach((key, value) => {
			viewWriter.setStyle(key, value, paragraph);
		});
	}

	return paragraph;
};

export const createSpanModelElement = (viewElement, modelWriter) => {
	const span = modelWriter.createElement('span', viewElement._attrs);
	modelWriter.setAttribute('classes', viewElement._classes, span);
	modelWriter.setAttribute('styles', viewElement._styles, span);
	return span;
};

export const createSpanViewElement = (modelElement, viewWriter) => {
	const span = viewWriter.createContainerElement('span', null);

	modelElement.getAttribute('classes').forEach((value, key) => {
		viewWriter.addClass(value, span);
	});

	modelElement.getAttribute('styles').forEach((value, key) => {
		viewWriter.setStyle(key, value, span);
	});
	return span;
};
