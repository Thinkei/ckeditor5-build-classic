import Command from '@ckeditor/ckeditor5-core/src/command';
import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';

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
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		if (selectedBlockElement) {
			if (isBlockElement(selectedBlockElement.parent, 'model')) {
				return;
			}
			this.insertContractBlockElement();
		} else {
			this.insertContractBlockElement();
		}
	}

	insertContractBlockElement() {
		const editor = this.editor;
		const model = editor.model;
		model.change(modelWriter => {
			const selection = editor.model.document.selection;
			if (selection.isCollapsed) {
				const position = selection.getFirstPosition();
				const blockElement = modelWriter.createElement(
					'contract_block',
					blockElementAttribute
				);
				modelWriter.insert(blockElement, position);
			} else {
				const range = selection.getFirstRange();
				const commonAncestor = range.getCommonAncestor();
				const blockElement = modelWriter.createElement(
					'contract_block',
					blockElementAttribute
				);
				const position = ModelPosition.createAt(
					commonAncestor,
					'before'
				);
				modelWriter.remove(range.getCommonAncestor());
				modelWriter.insert(blockElement, position);
				modelWriter.append(commonAncestor, blockElement);
			}
		});
	}
}

export class BlockGroupCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute(blockGroupValue) {
		const editor = this.editor;
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');

		selectedBlockElement && blockGroupValue !== ''
			? this.editBlockGroup(selectedBlockElement, blockGroupValue)
			: null;
	}

	editBlockGroup(selectedBlockElement, blockGroupValue) {
		editor.model.change(modelWriter => {
			modelWriter.setAttribute(
				'block_group',
				blockGroupValue,
				selectedBlockElement
			);
		});
		editor.editing.view.change(viewWriter => {
			viewWriter.setAttribute(
				'block_group',
				blockGroupValue,
				this.editor.editing.mapper.toViewElement(selectedBlockElement)
			);
		});
	}
}
