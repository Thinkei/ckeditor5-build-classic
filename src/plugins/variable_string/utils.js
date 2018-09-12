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
				const variableTag = modelWriter.createElement(
					'variable_string',
					genVariableAttribute(type)
				);
				modelWriter.append(
					modelWriter.createText(`Variable-${type}`),
					variableTag
				);
				modelWriter.insert(variableTag, selection.getFirstPosition());
			});
		}
	}
};
