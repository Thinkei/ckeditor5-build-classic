export const contractBlockSchema = editor => {
	editor.model.schema.register('contract_block', {
		allowIn: ['contract_section', 'contract_block'],
		allowAttributes: [
			'block_group',
			'id',
			'optional',
			'probation',
			'visible'
		]
	});
};
