import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export const variableStringAttributes = {
	auto_populate: 'organisation_name',
	id: Math.random(),
	block_options: [],
	help_text: '',
	initial_value: 'init value of string',
	required: false,
	variable_name: 'hello',
	variable_type: '',
	class: ''
};

const genVariableAttributes = (type, className) => {
	return {
		...variableStringAttributes,
		variable_type: type,
		class: className
	};
};

const createVariableElement = (modelWriter, position, type, className) => {
	const variableTag = modelWriter.createElement(
		`variable_${type}`,
		genVariableAttributes(type, className)
	);
	modelWriter.append(modelWriter.createText(`variable_${type}`), variableTag);
	modelWriter.insert(variableTag, position);
	modelWriter.setSelection(Range.createOn(variableTag));
};

// Add variable element to model
// TODO: refactor code here (abtract function for changing model)
// TODO: re-define css for this class
export const addVariable = (type, editor) => {
	editor.model.change(modelWriter => {
		const selection = editor.model.document.selection;
		if (selection.isCollapsed) {
			createVariableElement(
				modelWriter,
				selection.getFirstPosition(),
				type,
				`variable_${type}`
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
					type,
					`variable_${type}`
				);
			}
		}
	});
};

export const createVariableToolbarButton = (
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
