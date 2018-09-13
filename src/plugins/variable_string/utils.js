import toMap from '@ckeditor/ckeditor5-utils/src/tomap';
import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';

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

const genVariableAttribute = type => {
	return {
		...variableStringAttributes,
		variable_type: type
	};
};

export const addVariable = (type, editor) => {
	switch (type) {
		case 'String': {
			editor.model.change(modelWriter => {
				const selection = editor.model.document.selection;
				if (selection.isCollapsed) {
					const variableTag = modelWriter.createElement(
						'variable_string',
						genVariableAttribute(type)
					);
					modelWriter.append(
						modelWriter.createText(`Variable-${type}`),
						variableTag
					);
					modelWriter.insert(
						variableTag,
						selection.getFirstPosition()
					);
				} else {
					const ranges = editor.model.schema.getValidRanges(
						selection.getRanges(),
						'variable'
					);

					for (const range of ranges) {
						const position = ModelPosition.createAt(range.start);
						modelWriter.remove(range);
						const variableTag = modelWriter.createElement(
							'variable_string',
							genVariableAttribute(type)
						);
						modelWriter.append(
							modelWriter.createText(`Variable-${type}`),
							variableTag
						);
						modelWriter.insert(variableTag, position);
					}
				}
			});
		}
	}
};
