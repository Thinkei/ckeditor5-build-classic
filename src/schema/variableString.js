export const variableStringSchema = editor => {
	editor.model.schema.register('variable_string', {
		isBlock: true,
		isObject: true,
		allowIn: ['paragraph', 'contract_block'],
		allowAttributes: [
			'auto_populate',
			'block_options',
			'help_text',
			'id',
			'initial_value',
			'required',
			'variable_name',
			'variable_type'
		]
	});
};
