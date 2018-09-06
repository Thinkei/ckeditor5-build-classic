import Command from '@ckeditor/ckeditor5-core/src/command';
import { toBool } from '../contract_block/utils';

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
		const selectedSectionElement = this.getSelectedSectionElement(
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

	// TODO: implement this function
	insertTitleNode(modelWriter, sectionElement) {
		const p = modelWriter.createElement('paragraph', {
			id: sectionElement.getAttribute('id')
		});
		modelWriter.append(
			modelWriter.createText(sectionElement.getAttribute('title')),
			p
		);
		modelWriter.insert(p, sectionElement, 'before');
		this.insertedNodes.add(p);
	}

	removeTitleNode(modelWriter, sectionElement) {
		for (const node of this.insertedNodes) {
			if (node.getAttribute('id') === sectionElement.getAttribute('id')) {
				modelWriter.remove(node);
				this.insertedNodes.delete(node);
			}
		}
	}

	getSelectedSectionElement(position) {
		return this.findSelectionAncestor(position);
	}

	findSelectionAncestor(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => this.isSectionElement(ancestor));
	}

	isSectionElement(node) {
		return node.is('element', 'contract_section');
	}
}
