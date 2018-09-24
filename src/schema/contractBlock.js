export function contractBlockSchema(editor) {
	editor.model.schema.register('contract_block', {
		allowIn: ['contract_section', 'contract_block', 'paragraph'],
		allowAttributes: [
			'block_group',
			'id',
			'optional',
			'probation',
			'visible'
		]
	});
}
