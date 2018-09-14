export const contractSectionSchema = editor => {
	editor.model.schema.register('contract_section', {
		isBlock: true,
		isLimit: true,
		allowIn: '$root',
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
