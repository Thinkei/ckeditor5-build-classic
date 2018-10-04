export function contractBlockSchema(editor) {
	editor.model.schema.register('contract_block', {
		isLimit: true,
		allowIn: ['contract_section', 'contract_block'],
		allowAttributes: [
			'block_group',
			'id',
			'optional',
			'probation',
			'visible'
		]
	});
}
