import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { contractBlockConverterHelper } from '../../helpers/contract_block';
import { contractBlockSchema } from '../../schema/contractBlock';
import ToggleCommand from './contractblockcommand';

const BLOCK_FOCUSED_CLASS_NAME = 'contract-block_focused';
const BLOCK_ELEMENT = 'blockElement';

export default class BlockEditing extends Plugin {
	init() {
		const editor = this.editor;
		contractBlockConverterHelper(editor);
		contractBlockSchema(editor);

		// create block commands
		editor.commands.add('toggle', new ToggleCommand(editor));

		this.setupBlockHighlight();
	}

	setupBlockHighlight() {
		const editor = this.editor;
		const view = editor.editing.view;
		const highlightedBlocks = new Set();
		// post-fixers allow to update view tree just before rendering to the DOM
		view.document.registerPostFixer(writer => {
			const currentSelectedBlockElement = this.getSelectedBlockElement();
			if (currentSelectedBlockElement && view.document.isFocused) {
				this.addHighLightClass(writer, highlightedBlocks);
			}
			if (!view.document.isFocused) {
				this.removeHighlightClass(writer, highlightedBlocks);
			}
		});

		editor.conversion.for('editingDowncast').add(dispatcher => {
			// Make sure the highlight is removed on every possible event, before conversion is started.
			dispatcher.on('insert', removeHighlight, {
				priority: 'highest'
			});
			dispatcher.on('remove', removeHighlight, {
				priority: 'highest'
			});
			dispatcher.on('attribute', removeHighlight, {
				priority: 'highest'
			});
			dispatcher.on('selection', removeHighlight, {
				priority: 'highest'
			});

			function removeHighlight() {
				view.change(writer => {
					for (const item of highlightedBlocks.values()) {
						writer.removeClass(BLOCK_FOCUSED_CLASS_NAME, item);
						highlightedBlocks.delete(item);
					}
				});
			}
		});
	}

	addHighLightClass(writer, highlightedBlocks) {
		let currentSelectedBlockElement = this.getSelectedBlockElement();
		if (currentSelectedBlockElement) {
			// map Model Element to View Element
			const viewElement = editor.editing.mapper.toViewElement(
				currentSelectedBlockElement
			);
			if (
				viewElement.is('containerElement', 'section') &&
				viewElement.getCustomProperty(BLOCK_ELEMENT)
			) {
				writer.addClass(BLOCK_FOCUSED_CLASS_NAME, viewElement);
				highlightedBlocks.add(viewElement);
			}
		}
	}

	removeHighlightClass(writer, highlightedBlocks) {
		for (const item of highlightedBlocks.values()) {
			writer.removeClass(BLOCK_FOCUSED_CLASS_NAME, item);
			highlightedBlocks.delete(item);
		}
	}

	getSelectedBlockElement() {
		const selection = this.editor.model.document.selection;
		return this.findSelectionAncestor(selection.getFirstPosition());
	}

	findSelectionAncestor(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => this.isBlockElement(ancestor));
	}

	// check if this node is block element (Model Document)
	isBlockElement(node) {
		return node.is('element', 'contract_block');
	}
}
