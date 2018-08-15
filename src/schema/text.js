export const textSchema = editor => {
	editor.model.schema.extend('$text', {
		allowIn: [
			'contract_block',
			'contract_section',
			'variable_string',
			'variable_date',
			'variable_image',
			'variable_signature_pad',
			'variable_select'
		]
	});
};
