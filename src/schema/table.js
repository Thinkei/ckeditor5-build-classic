export const tableSchema = editor => {
	editor.model.schema.register('table', {
		allowIn: ['contract_block'],
		allowAttributes: ['border', 'cellpadding', 'cellspacing', 'style']
	});
	editor.model.schema.register('tbody', {
		allowIn: ['table']
	});
	editor.model.schema.register('tr', {
		allowIn: ['tbody']
	});
	editor.model.schema.register('td', {
		allowIn: ['tr'],
		allowAttributes: ['style']
	});
};
