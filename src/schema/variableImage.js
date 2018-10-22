export const variableImageSchema = editor => {
	editor.model.schema.register('variable_image', {
		isObject: true,
		allowIn: ['paragraph', 'listItem', 'tableCell'],
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
