export const contractBlockSchema = editor => {
	editor.model.schema.register('contract_block', {
		allowIn: 'contract_section',
		allowAttributes: [
			'block_group',
			'id',
			'optional',
			'probation',
			'visible'
		]
	});
};
