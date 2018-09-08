import Command from '@ckeditor/ckeditor5-core/src/command';
import ViewPosition from '@ckeditor/ckeditor5-engine/src/view/position';

import { toBool } from '../contract_block/utils';
import { getSelectedSectionElement } from './utils';

const sectionElementSymbol = 'sectionElement';

export class HideTitleCommand extends Command {
	constructor(editor) {
		super(editor);
		this.insertedNodes = new Set();
	}

	refresh() {
		this.isEnabled = true;
	}

	execute() {
		// view side
		const editor = this.editor;
		const selection = editor.model.document.selection;
		this.modelPosition = selection.getFirstPosition();
		const selectedSectionElement = getSelectedSectionElement(
			selection.getFirstPosition()
		);

		if (selectedSectionElement) {
			editor.model.change(modelWriter => {
				if (
					toBool(selectedSectionElement.getAttribute('hide_title')) ||
					toBool(
						selectedSectionElement.getAttribute(
							'hide_title_in_document'
						)
					)
				) {
					this.toggleHideTitle(
						modelWriter,
						{
							hide_title: 'false',
							hide_title_in_document: 'false'
						},
						selectedSectionElement,
						false
					);
				} else {
					this.toggleHideTitle(
						modelWriter,
						{
							hide_title: 'true',
							hide_title_in_document: 'true'
						},
						selectedSectionElement,
						true
					);
				}
			});
		}
	}

	toggleHideTitle(modelWriter, attributes, element, isHide) {
		modelWriter.setAttributes(attributes, element);
		isHide
			? this.insertTitleNode(modelWriter, element)
			: this.removeTitleNode(modelWriter, element);
	}

	insertTitleNode(modelWriter, sectionElement) {
		const titleHTMLTag = modelWriter.createElement('section_title', {
			id: sectionElement.getAttribute('id'),
			section_title: true
		});

		modelWriter.append(
			modelWriter.createText(sectionElement.getAttribute('title')),
			titleHTMLTag
		);
		modelWriter.insert(titleHTMLTag, sectionElement, 'before');
		this.insertedNodes.add(titleHTMLTag);
	}

	removeTitleNode(modelWriter, sectionElement) {
		for (const node of this.insertedNodes) {
			if (node.getAttribute('id') === sectionElement.getAttribute('id')) {
				modelWriter.remove(node);
				this.insertedNodes.delete(node);
			}
		}
	}
}

export class ChangeTitleCommand extends Command {
	refresh() {
		// TODO: set data attribute for $text title node
		this.value = this.editor.model.document.selection.getAttribute(
			'sectionTitleValue'
		);
		this.isEnabled = true;
	}

	execute(titleFormValue) {
		// model side
		const model = this.editor.model;
		const selection = model.document.selection;
		const selectedSectionTitle = this.getSelectedSectionTitle(
			selection.getFirstPosition()
		);
		const contractSectionList = [];

		const root = model.document.getRoot();
		const children = root.getChildren();
		for (const node of children) {
			if (
				node.is('element', 'contract_section') &&
				node.getAttribute('id') ===
					selectedSectionTitle.getAttribute('id')
			) {
				contractSectionList.push(node);
			}
		}

		contractSectionList.forEach(section => {
			const viewElement = this.editor.editing.mapper.toViewElement(
				section
			);

			model.change(modelWriter => {
				modelWriter.setAttribute('title', titleFormValue, section);
			});

			this.editor.editing.view.change(viewWriter => {
				viewWriter.setAttribute('title', titleFormValue, viewElement);
			});
		});
	}

	getSelectedSectionTitle(position) {
		return this.findSelectionAncestor(position);
	}

	findSelectionAncestor(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => {
				return this.isSectionTitle(ancestor);
			});
	}

	isSectionTitle(node) {
		return node.is('element', 'section_title');
	}
}
