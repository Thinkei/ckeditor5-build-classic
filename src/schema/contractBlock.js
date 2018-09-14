export const contractBlockSchema = editor => {
	editor.model.schema.register('contract_block', {
		isBlock: true,
		isLimit: true,
		allowIn: ['contract_section', 'contract_block', 'paragraph'],
		allowAttributes: [
			'block_group',
			'id',
			'optional',
			'probation',
			'visible'
		]
	});
};
