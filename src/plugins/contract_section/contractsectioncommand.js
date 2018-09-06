import Command from '@ckeditor/ckeditor5-core/src/command';
import { toBool } from '../contract_block/utils';

const sectionElementSymbol = 'sectionElement';

export class HideTitleCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		// view side
		const editor = this.editor;
		const selection = editor.editing.view.document.selection;
		const selectedSectionElement = this.getSelectedSectionElement(
			selection.getFirstPosition()
		);

		if (selectedSectionElement) {
			editor.editing.view.change(viewWriter => {
				if (
					toBool(selectedSectionElement.getAttribute('hide_title')) ||
					toBool(
						selectedSectionElement.getAttribute(
							'hide_title_in_document'
						)
					)
				) {
					this.toggleHideTitle(
						viewWriter,
						{
							attributes: [
								{
									name: 'hide_title',
									value: 'false'
								},
								{
									name: 'hide_title_in_document',
									value: 'false'
								}
							],
							className: 'contract-section'
						},
						selectedSectionElement,
						false
					);
				} else {
					this.toggleHideTitle(
						viewWriter,
						{
							attributes: [
								{
									name: 'hide_title',
									value: 'true'
								},
								{
									name: 'hide_title_in_document',
									value: 'true'
								}
							],
							className: 'contract-section'
						},
						selectedSectionElement,
						true
					);
				}
			});
		}
	}

	toggleHideTitle(viewWriter, option, element, isHide) {
		if (option.attributes.length) {
			option.attributes.forEach(attr => {
				viewWriter.setAttribute(attr.name, attr.value, element);
			});
		}
		isHide
			? viewWriter.removeClass(option.className, element)
			: viewWriter.addClass(option.className, element);
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
		return (
			node.is('containerElement', 'section') &&
			node.getCustomProperty(sectionElementSymbol)
		);
	}
}
