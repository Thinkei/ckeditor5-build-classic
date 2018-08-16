export const textSchema = editor => {
	editor.model.schema.extend('$text', {
		allowIn: [
			'paragraph',
			'td',
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
