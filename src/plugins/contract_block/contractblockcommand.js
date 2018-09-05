import Command from '@ckeditor/ckeditor5-core/src/command';

import {
	getSelectedBlockElement,
	toBool,
	changeViewElement,
	blockElementAttribute,
	isBlockElement
} from './utils';

const BLOCK_ELEMENT = 'blockElement';

export class ToggleCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		const editor = this.editor;
		const model = editor.model;
		// model element
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		// view element
		const viewElement = this.editor.editing.mapper.toViewElement(
			selectedBlockElement
		);
		const currentValue = toBool(
			selectedBlockElement.getAttribute('optional')
		);

		if (
			viewElement.is('containerElement', 'section') &&
			viewElement.getCustomProperty(BLOCK_ELEMENT)
		) {
			// modify view element
			this.editor.editing.view.document.registerPostFixer(viewWriter => {
				if (currentValue) {
					changeViewElement(
						{
							attribute: 'optional',
							class: {
								remove: 'contract-block',
								add: 'contract-block-dotted'
							}
						},
						viewElement,
						viewWriter,
						currentValue
					);
				} else {
					changeViewElement(
						{
							attribute: 'optional',
							class: {
								remove: 'contract-block-dotted',
								add: 'contract-block'
							}
						},
						viewElement,
						viewWriter,
						currentValue
					);
				}
			});
		}

		// modify model element
		model.change(modelWriter => {
			modelWriter.removeAttribute('optional', selectedBlockElement);
			if (currentValue) {
				modelWriter.setAttribute(
					'optional',
					'false',
					selectedBlockElement
				);
			} else {
				modelWriter.setAttribute(
					'optional',
					'true',
					selectedBlockElement
				);
			}
		});
	}
}

export class AddBlockCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		const editor = this.editor;
		const model = editor.model;
		// model element
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		if (selectedBlockElement) {
			if (isBlockElement(selectedBlockElement.parent, 'model')) {
				return;
			}
			model.change(modelWriter => {
				const selection = editor.model.document.selection;
				const position = selection.getFirstPosition();
				const blockElement = modelWriter.createElement(
					'contract_block',
					blockElementAttribute
				);
				modelWriter.insert(blockElement, position);
			});
		} else {
			model.change(modelWriter => {
				const selection = editor.model.document.selection;
				const position = selection.getFirstPosition();
				const blockElement = modelWriter.createElement(
					'contract_block',
					blockElementAttribute
				);
				modelWriter.insert(blockElement, position);
			});
		}
	}
}
