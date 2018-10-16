export const listItemSchema = editor => {
	editor.model.schema.extend('listItem', {
		allowIn: ['contract_block'],
		allowAttributes: [
			'style',
			'class',
			'bold',
			'italic',
			'underline',
			'variable'
		]
	});
};
