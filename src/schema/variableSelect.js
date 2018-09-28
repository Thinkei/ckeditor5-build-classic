export const variableSelectSchema = editor => {
	editor.model.schema.register('variable_select', {
		allowIn: ['paragraph'],
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
