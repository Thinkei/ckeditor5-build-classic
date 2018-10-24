export const spanSchema = editor => {
	editor.model.schema.register('span', {
		allowIn: ['paragraph', 'listItem', 'span', 'tableCell']
	});
};
