export const textSchema = editor => {
	editor.model.schema.extend('$text', {
		allowIn: [
			'contract_section',
			'contract_block',
			'variable_string',
			'variable_date',
			'variable_image',
			'variable_signature_pad',
			'variable_select'
		]
	});
};
