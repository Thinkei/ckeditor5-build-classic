export const contractSectionSchema = editor => {
	editor.model.schema.register('contract_section', {
		allowIn: '$root',
		isLimit: true,
		allowAttributes: [
			'hide_title',
			'hide_title_in_document',
			'id',
			'is_show',
			'optional',
			'premium',
			'title'
		]
	});
};
