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

export const toBool = value => {
	return value === 'true';
};

export const contractSectionAttribute = {
	title: 'Section Title',
	hide_title: false,
	hide_title_in_document: false,
	is_show: true,
	optional: true,
	premium: false
};
