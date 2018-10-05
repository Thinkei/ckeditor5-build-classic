import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

const createVariableElement = (modelWriter, position, variableAttributes) => {
	const elementName = `variable_${variableAttributes.variable_type
		.replace(' ', '_')
		.toLowerCase()}`;
	const variableTag = modelWriter.createElement(
		elementName,
		variableAttributes
	);
	modelWriter.append(
		modelWriter.createText(variableAttributes.variable_name),
		variableTag
	);
	modelWriter.insert(variableTag, position);
	modelWriter.setSelectionFocus(variableTag, 'after');
};

// Add variable element to model
export const addVariable = (variableAttributes, editor) => {
	editor.model.change(modelWriter => {
		const selection = editor.model.document.selection;
		if (selection.isCollapsed) {
			createVariableElement(
				modelWriter,
				selection.getFirstPosition(),
				variableAttributes
			);
		} else {
			const ranges = editor.model.schema.getValidRanges(
				selection.getRanges(),
				'variable'
			);
			for (const range of ranges) {
				const position = ModelPosition.createAt(range.start);
				modelWriter.remove(range);
				createVariableElement(
					modelWriter,
					position,
					variableAttributes
				);
			}
		}
	});
};

export const createToolbarButton = (
	editor,
	plugin,
	{ commandName, buttonName, buttonLabel, icon }
) => {
	const addVariableCommand = editor.commands.get(commandName);
	const t = editor.t;

	// button
	editor.ui.componentFactory.add(buttonName, locale => {
		const button = new ButtonView(locale);

		button.set({
			isEnabled: true,
			label: t(buttonLabel),
			icon,
			tooltip: true
		});

		plugin.listenTo(button, 'execute', () => {
			editor.execute(commandName);
		});

		button.bind('isEnabled').to(addVariableCommand, 'isEnabled');

		return button;
	});
};
