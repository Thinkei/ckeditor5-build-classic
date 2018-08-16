export const paragraphSchema = editor => {
	const paragraphSchema = editor.model.schema.getDefinition('paragraph');
	paragraphSchema.allowIn[0] = 'contract_block';
};
