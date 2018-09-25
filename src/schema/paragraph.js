export const paragraphSchema = editor => {
	editor.model.schema.extend('paragraph', {
		allowIn: ['contract_block']
	});
};
