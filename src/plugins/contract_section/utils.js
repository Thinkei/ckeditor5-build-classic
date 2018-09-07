export const getSelectedSectionElement = position => {
	return findSelectionAncestor(position);
};

const findSelectionAncestor = position => {
	return position
		.getAncestors()
		.reverse()
		.find(ancestor => isSectionElement(ancestor));
};

const isSectionElement = node => {
	return node.is('element', 'contract_section');
};
