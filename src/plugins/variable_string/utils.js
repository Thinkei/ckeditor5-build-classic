import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';

export const variableStringAttributes = {
	auto_populate: 'organisation_name',
	id: Math.random(),
	block_options: [],
	help_text: '',
	initial_value: 'init value of string',
	required: false,
	variable_name: 'hello',
	variable_type: 'String',
	class: 'variable-string'
};

export const toVariableWidget = (viewElement, viewWriter) => {
	return toWidget(viewElement, viewWriter);
};

const genVariableAttribute = type => {
	return {
		...variableStringAttributes,
		variable_type: type
	};
};

const createVarStringModelElement = (modelWriter, position, type) => {
	const variableTag = modelWriter.createElement(
		'variable_string',
		genVariableAttribute(type)
	);
	modelWriter.append(modelWriter.createText(`Variable-${type}`), variableTag);
	modelWriter.insert(variableTag, position);
	modelWriter.setSelection(Range.createOn(variableTag));
};

export const addVariable = (type, editor) => {
	switch (type) {
		case 'String': {
			editor.model.change(modelWriter => {
				const selection = editor.model.document.selection;
				if (selection.isCollapsed) {
					createVarStringModelElement(
						modelWriter,
						selection.getFirstPosition(),
						type
					);
				} else {
					const ranges = editor.model.schema.getValidRanges(
						selection.getRanges(),
						'variable'
					);
					for (const range of ranges) {
						const position = ModelPosition.createAt(range.start);
						modelWriter.remove(range);
						createVarStringModelElement(
							modelWriter,
							position,
							type
						);
					}
				}
			});
		}
	}
};
