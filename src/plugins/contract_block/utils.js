const BLOCK_ELEMENT = 'blockElement';

const getSelection = (editor, flag) => {
	if (flag === 'model') {
		return editor.model.document.selection;
	} else if (flag === 'view') {
		return editor.editing.view.document.selection;
	}
};

export const isBlockElement = (node, flag) => {
	if (flag === 'view') {
		return (
			node.is('containerElement', 'section') &&
			!!node.getCustomProperty(BLOCK_ELEMENT)
		);
	} else if (flag === 'model') {
		return node.is('element', 'contract_block');
	}
};

const findSelectionAncestor = (position, flag) => {
	return position
		.getAncestors()
		.reverse()
		.find(ancestor => isBlockElement(ancestor, flag));
};

export const toBool = value => {
	return value === 'true';
};

export const getSelectedBlockElement = (editor, flag) => {
	const selection = getSelection(editor, flag);
	if (flag === 'view') {
		if (selection.isCollapsed) {
			return findSelectionAncestor(selection.getFirstPosition(), flag);
		} else {
			// start position != end position
			const range = selection.getFirstRange().getTrimmed();
			const startBlock = findSelectionAncestor(range.start, flag);
			const endBlock = findSelectionAncestor(range.end, flag);
			if (!startBlock || startBlock != endBlock) {
				return null;
			}

			return startBlock;
		}
	} else if (flag === 'model') {
		return findSelectionAncestor(selection.getFirstPosition(), flag);
	}
};

export const changeViewElement = (
	option,
	viewElement,
	viewWriter,
	currentValue
) => {
	viewWriter.removeAttribute(option.attribute, viewElement);
	viewWriter.setAttribute(option.attribute, `${!currentValue}`, viewElement);

	viewWriter.removeClass(option.class.remove, viewElement);
	viewWriter.addClass(option.class.add, viewElement);
};

export const blockElementAttribute = {
	block_group: '',
	id: Math.random(),
	optional: false,
	probation: false,
	visible: true
};
