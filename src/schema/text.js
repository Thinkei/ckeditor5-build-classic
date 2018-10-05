export const textSchema = editor => {
	editor.model.schema.extend('$text', {
		allowAttributes: ['variable'],
		allowIn: [
			'variable_string',
			'variable_date',
			'variable_image',
			'variable_signature_pad',
			'variable_select',
			'section_title'
		]
	});
};
