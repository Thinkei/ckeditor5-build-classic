export const sectionTitleSchema = editor => {
	editor.model.schema.register('section_title', {
		allowIn: ['$root', 'contract_section', 'contract_block'],
		allowAttributes: ['id', 'isSectionTitle']
	});
};
