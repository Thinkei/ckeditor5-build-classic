export const tableSchema = editor => {
	editor.model.schema.extend('table', {
		allowIn: ['contract_block']
	});
};
