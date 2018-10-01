export const isCommandExist = (editor, commandName) => {
	return editor.commands.get(commandName);
};
