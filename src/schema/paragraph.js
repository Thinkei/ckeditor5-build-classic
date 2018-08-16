export const paragraphSchema = editor => {
	editor.model.schema.extend('paragrapn', {
		allowIn: ['contract_block']
	});
};
