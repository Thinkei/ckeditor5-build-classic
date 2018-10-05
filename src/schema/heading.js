export const headingSchema = editor => {
	editor.model.schema.extend('paragraph', {
		allowIn: ['contract_block']
	});
	editor.model.schema.extend('heading1', {
		allowIn: ['contract_block']
	});
	editor.model.schema.extend('heading2', {
		allowIn: ['contract_block']
	});
	editor.model.schema.extend('heading3', {
		allowIn: ['contract_block']
	});
};
