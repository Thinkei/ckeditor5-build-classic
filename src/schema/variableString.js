export const variableStringSchema = editor => {
	editor.model.schema.register('variable_string', {
		isObject: true,
		allowIn: ['paragraph', 'listItem'],
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
