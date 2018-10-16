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
		const editor = this.editor;
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		if (selectedBlockElement)
			this.value = toBool(selectedBlockElement.getAttribute('optional'));
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

const findBlockParentElement = element => {
	if (!element) return;
	if (isBlockElement(element, 'model')) {
		return true;
	}
	return findBlockParentElement(element.parent);
};

// check that if there is any block
const isValidSelection = selection => {
	const position = selection.getFirstPosition();
	if (
		position
			.getAncestors()
			.reverse()
			.find(node => {
				return node.is('element', 'contract_block');
			})
	) {
		return false;
	}
	return true;
};

export class AddBlockCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		this.insertContractBlockElement();
		// const editor = this.editor;
		// const selection = editor.model.document.selection;
		// if (isValidSelection(selection)) {
		// }

		// const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		// if (selectedBlockElement) {
		// 	if (findBlockParentElement(selectedBlockElement.parent)) {
		// 		return;
		// 	}
		// 	this.insertContractBlockElement();
		// } else {
		// 	this.insertContractBlockElement();
		// }
	}

	findParagraphParentElement(element) {
		if (!element) return;
		if (element.is('element', 'paragraph')) {
			return element;
		}
		return this.findParagraphParentElement(element.parent);
	}

	insertContractBlockElement() {
		const editor = this.editor;
		const model = editor.model;
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		model.change(modelWriter => {
			// Now we just handle insert block after block, if then we want to add
			// block nest block we will reuse the blow code
			const selection = editor.model.document.selection;
			if (selection.isCollapsed) {
				const blockElement = modelWriter.createElement(
					'contract_block',
					blockElementAttribute
				);
				const paragraph = modelWriter.createElement('paragraph');
				modelWriter.append(paragraph, blockElement);
				modelWriter.insert(blockElement, selectedBlockElement, 'after');
			} else {
				const range = selection.getFirstRange();
				const startPos = this.findParagraphParentElement(
					range.start.parent
				);
				const endPos = this.findParagraphParentElement(
					range.end.parent
				);
				const startPosIndex = startPos.index;
				const endPosIndex = endPos.index;

				if (this.isPositionAtStart(startPos, selectedBlockElement)) {
					this.handleSeparateBlock(
						modelWriter,
						selectedBlockElement,
						startPosIndex,
						endPosIndex,
						'start'
					);
				} else if (this.isPositionAtEnd(endPos, selectedBlockElement)) {
					this.handleSeparateBlock(
						modelWriter,
						selectedBlockElement,
						startPosIndex,
						endPosIndex,
						'end'
					);
				} else {
					this.handleSeparateBlock(
						modelWriter,
						selectedBlockElement,
						startPosIndex,
						endPosIndex,
						'middle'
					);
				}

				// const commonAncestor = range.getCommonAncestor();
				// const position = ModelPosition.createFromParentAndOffset(
				// 	selectedBlockElement,
				// 	range.start.offset
				// );

				// const position = ModelPosition.createAt(
				// 	commonAncestor,
				// 	'before'
				// );

				// const paragraph = modelWriter.createElement('paragraph');
				// const blockElement = modelWriter.createElement(
				// 	'contract_block',
				// 	blockElementAttribute
				// );
				// modelWriter.append(paragraph, blockElement);
				// modelWriter.remove(range.getCommonAncestor());
				// modelWriter.insert(blockElement, position);
				// modelWriter.append(commonAncestor, blockElement);
			}
		});
	}

	handleSeparateBlock(
		modelWriter,
		sourceBlockElement,
		startIndex,
		endIndex,
		position
	) {
		switch (position) {
			case 'end': {
				const listBlock = this.listBlockElementCreator(modelWriter, 2);
				listBlock.forEach(block => {
					modelWriter.append(block, sourceBlockElement.parent);
				});
				this.handleAddBlock(
					modelWriter,
					sourceBlockElement,
					startIndex,
					endIndex,
					listBlock,
					'end'
				);
				return;
			}
			case 'start': {
				const listBlock = this.listBlockElementCreator(modelWriter, 2);
				listBlock.forEach(block => {
					modelWriter.append(block, sourceBlockElement.parent);
				});
				this.handleAddBlock(
					modelWriter,
					sourceBlockElement,
					startIndex,
					endIndex,
					listBlock,
					'start'
				);
				return;
			}
			case 'middle': {
				const listBlock = this.listBlockElementCreator(modelWriter, 3);
				listBlock.forEach(block => {
					modelWriter.append(block, sourceBlockElement.parent);
				});
				this.handleAddBlock(
					modelWriter,
					sourceBlockElement,
					startIndex,
					endIndex,
					listBlock,
					'middle'
				);
				return;
			}
		}
	}

	handleAddBlock(
		modelWriter,
		sourceBlockElement,
		startIndex,
		endIndex,
		listBlock,
		type
	) {
		const children = [];
		for (const node of sourceBlockElement.getChildren()) {
			children.push({
				node,
				index: node.index
			});
		}
		if (type === 'middle') {
			children.forEach(nodeData => {
				if (nodeData.index < startIndex) {
					modelWriter.append(nodeData.node, listBlock[0]);
				} else if (nodeData.index > endIndex) {
					modelWriter.append(nodeData.node, listBlock[2]);
				} else {
					modelWriter.setAttribute('optional', 'true', listBlock[1]);
					modelWriter.append(nodeData.node, listBlock[1]);
				}
			});
		} else if (type === 'start') {
			children.forEach(nodeData => {
				if (
					startIndex <= nodeData.index &&
					nodeData.index <= endIndex
				) {
					modelWriter.setAttribute('optional', 'true', listBlock[0]);
					modelWriter.append(nodeData.node, listBlock[0]);
				} else {
					modelWriter.append(nodeData.node, listBlock[1]);
				}
			});
		} else {
			children.forEach(nodeData => {
				if (
					startIndex <= nodeData.index &&
					nodeData.index <= endIndex
				) {
					modelWriter.setAttribute('optional', 'true', listBlock[1]);
					modelWriter.append(nodeData.node, listBlock[1]);
				} else {
					modelWriter.append(nodeData.node, listBlock[0]);
				}
			});
		}

		modelWriter.remove(sourceBlockElement);
	}

	listBlockElementCreator(modelWriter, amount) {
		const listBlock = [];
		for (let i = 0; i < amount; i++) {
			listBlock.push(
				modelWriter.createElement(
					'contract_block',
					blockElementAttribute
				)
			);
		}
		return listBlock;
	}

	isPositionAtEnd(element, selectedBlockElement) {
		const children = [];
		for (const node of selectedBlockElement.getChildren()) {
			children.push(node);
		}
		if (element.index === children[children.length - 1].index) {
			return true;
		}
		return false;
	}

	isPositionAtStart(element, selectedBlockElement) {
		const children = [];
		for (const node of selectedBlockElement.getChildren()) {
			children.push(node);
		}
		if (element.index === children[0].index) {
			return true;
		}
		return false;
	}
}

export class BlockGroupCommand extends Command {
	refresh() {
		const editor = this.editor;
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');
		if (selectedBlockElement) {
			this.value = selectedBlockElement.getAttribute('block_group');
		}
		this.isEnabled = true;
	}

	execute(blockGroupValue) {
		const editor = this.editor;
		const selectedBlockElement = getSelectedBlockElement(editor, 'model');

		selectedBlockElement
			? this.editBlockGroup(editor, selectedBlockElement, blockGroupValue)
			: null;
	}

	editBlockGroup(editor, selectedBlockElement, blockGroupValue) {
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
