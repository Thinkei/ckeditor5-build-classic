import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const BOLD = 'boldEditing';

/**
 * The bold editing feature.
 *
 * It registers the `bold` command and introduces the `bold` attribute in the model which renders to the view
 * as a `<strong>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class BoldEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Allow bold attribute on text nodes.
		editor.model.schema.extend('$text', { allowAttributes: BOLD });

		// Build converter from model to view for data and editing pipelines.

		editor.conversion.attributeToElement({
			model: BOLD,
			view: 'strong',
			upcastAlso: [
				'b',
				{
					styles: {
						'font-weight': 'bold'
					}
				}
			]
		});

		// Create bold command.
		editor.commands.add(BOLD, new AttributeCommand(editor, BOLD));

		// Set the Ctrl+B keystroke.
		editor.keystrokes.set('CTRL+B', BOLD);
	}
}
