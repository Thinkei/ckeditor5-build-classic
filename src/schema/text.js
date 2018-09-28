export const textSchema = editor => {
	editor.model.schema.extend('$text', {
		allowIn: [
			'paragraph',
			'variable_string',
			'variable_date',
			'variable_image',
			'variable_signature_pad',
			'variable_select',
			'td',
			'contract_section',
			'contract_block',
			'section_title'
		]
	});
};
