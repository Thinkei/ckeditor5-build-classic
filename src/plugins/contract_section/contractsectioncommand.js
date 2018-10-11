import Command from '@ckeditor/ckeditor5-core/src/command';

import { toBool } from './utils';
import { getSelectedSectionElement, contractSectionAttribute } from './utils';
import { blockElementAttribute } from '../contract_block/utils';

export class AddSectionCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		this.insertContractSectionElement();
	}

	insertContractSectionElement() {
		const editor = this.editor;
		const model = editor.model;
		const selection = editor.model.document.selection;
		const position = selection.getFirstPosition();
		const selectedSectionElement = getSelectedSectionElement(position);
		model.change(modelWriter => {
			const sectionElement = modelWriter.createElement(
				'contract_section',
				contractSectionAttribute
			);
			// new block
			const blockElement = modelWriter.createElement(
				'contract_block',
				blockElementAttribute
			);
			modelWriter.append(
				modelWriter.createElement('paragraph'),
				blockElement
			);
			modelWriter.append(blockElement, sectionElement);

			modelWriter.insert(sectionElement, selectedSectionElement, 'after');
		});
	}
}

export class HideTitleCommand extends Command {
	constructor(editor) {
		super(editor);
		this.insertedNodes = new Set();
	}

	refresh() {
		const editor = this.editor;
		const selection = editor.model.document.selection;
		this.modelPosition = selection.getFirstPosition();
		const selectedSectionElement = getSelectedSectionElement(
			selection.getFirstPosition()
		);
		if (selectedSectionElement) {
			this.value = !(
				toBool(selectedSectionElement.getAttribute('hide_title')) ||
				toBool(
					selectedSectionElement.getAttribute(
						'hide_title_in_document'
					)
				)
			);
		}
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
		!isHide
			? this.insertTitleNode(attributes, element)
			: this.removeTitleNode(attributes, element);
	}

	insertTitleNode(attributes, sectionElement) {
		const viewElement = this.editor.editing.mapper.toViewElement(
			sectionElement
		);
		this.editor.editing.view.change(viewWriter => {
			viewWriter.setAttribute(
				'hide_title',
				attributes.hide_title,
				viewElement
			);
			viewWriter.setAttribute(
				'hide_title_in_document',
				attributes.hide_title_in_document,
				viewElement
			);
			viewWriter.addClass('section-title', viewElement);
		});
	}

	removeTitleNode(attributes, sectionElement) {
		const viewElement = this.editor.editing.mapper.toViewElement(
			sectionElement
		);
		this.editor.editing.view.change(viewWriter => {
			viewWriter.setAttribute(
				'hide_title',
				attributes.hide_title,
				viewElement
			);
			viewWriter.setAttribute(
				'hide_title_in_document',
				attributes.hide_title_in_document,
				viewElement
			);
			viewWriter.removeClass('section-title', viewElement);
		});
	}
}

export class ChangeTitleCommand extends Command {
	constructor(editor) {
		super(editor);

		this.titleTextNode = null;
		this.titleSectionChildrenNode = null;
	}

	// TODO: update value of title element to this.value
	refresh() {
		const editor = this.editor;
		const selection = editor.model.document.selection;
		const selectedSectionElement = getSelectedSectionElement(
			selection.getFirstPosition()
		);
		if (selectedSectionElement) {
			this.value = selectedSectionElement.getAttribute('title');
		}
		this.isEnabled = true;
	}

	execute(titleFormValue) {
		// model side
		const model = this.editor.model;
		const selection = model.document.selection;
		const selectedSection = this.getSelectedSection(
			selection.getFirstPosition()
		);
		const contractSectionList = [];

		const root = model.document.getRoot();
		const children = root.getChildren();
		for (const node of children) {
			if (
				node.is('element', 'section_title') &&
				node.getAttribute('id') === selectedSection.getAttribute('id')
			) {
				contractSectionList.push(node);
			}
		}

		if (titleFormValue !== '') {
			if (contractSectionList.length) {
				contractSectionList.forEach(sectionTitle => {
					const viewSectionElement = this.editor.editing.mapper.toViewElement(
						selectedSection
					);
					const viewTitleElement = this.editor.editing.mapper.toViewElement(
						sectionTitle
					);

					model.change(modelWriter => {
						modelWriter.setAttribute(
							'title',
							titleFormValue,
							selectedSection
						);
						sectionTitle.getChild(0)._data = titleFormValue;
					});

					this.editor.editing.view.change(modelWriter => {
						modelWriter.setAttribute(
							'title',
							titleFormValue,
							viewSectionElement
						);

						viewTitleElement.getChild(0)._data = titleFormValue;
					});
				});
			} else {
				const viewSectionElement = this.editor.editing.mapper.toViewElement(
					selectedSection
				);

				model.change(modelWriter => {
					modelWriter.setAttribute(
						'title',
						titleFormValue,
						selectedSection
					);
				});

				this.editor.editing.view.change(modelWriter => {
					modelWriter.setAttribute(
						'title',
						titleFormValue,
						viewSectionElement
					);
				});
			}
		}
	}

	getSelectedSection(position) {
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
		return node.is('element', 'contract_section');
	}
}

export class ToggleOptionalCommand extends Command {
	refresh() {
		const selection = this.editor.model.document.selection;
		const selectedSectionElement = this.getSelectedSectionElement(
			selection
		);
		if (selectedSectionElement)
			this.value = toBool(
				selectedSectionElement.getAttribute('optional')
			);
		this.isEnabled = true;
	}

	execute() {
		// view side
		const view = this.editor.editing.view;
		const selection = this.editor.model.document.selection;
		const selectedSectionElement = this.getSelectedSectionElement(
			selection
		);
		const viewElement = this.editor.editing.mapper.toViewElement(
			selectedSectionElement
		);

		this.editor.model.change(modelWriter => {
			modelWriter.setAttribute(
				'optional',
				`${!toBool(selectedSectionElement.getAttribute('optional'))}`,
				selectedSectionElement
			);
		});

		if (toBool(selectedSectionElement.getAttribute('optional'))) {
			view.change(viewWriter => {
				viewWriter.setAttribute(
					'optional',
					`${!toBool(viewElement.getAttribute('optional'))}`,
					viewElement
				);
				viewWriter.addClass('contract-section', viewElement);
			});
		} else {
			view.change(viewWriter => {
				viewWriter.setAttribute(
					'optional',
					`${!toBool(viewElement.getAttribute('optional'))}`,
					viewElement
				);
				viewWriter.removeClass('contract-section', viewElement);
			});
		}
	}

	getSelectedSectionElement(selection) {
		if (selection.getFirstPosition()) {
			return this.findSectionElement(selection.getFirstPosition());
		}
	}

	findSectionElement(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => {
				return this.isSectionElement(ancestor);
			});
	}

	isSectionElement(node) {
		return node.is('element', 'contract_section');
	}
}
