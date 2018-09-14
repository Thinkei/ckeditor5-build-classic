import Command from '@ckeditor/ckeditor5-core/src/command';

import { toBool } from './utils';
import { getSelectedSectionElement } from './utils';

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
			modelWriter.createText(sectionElement.getAttribute('title'), {
				section_title_value: true
			}),
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
	constructor(editor) {
		super(editor);

		this.titleTextNode = null;
		this.titleSectionChildrenNode = null;
	}

	// TODO: update value of title element to this.value
	refresh() {
		// model side
		const selection = this.editor.model.document.selection;
		if (selection) {
			const selectedSectionElement = selection
				.getFirstPosition()
				.getAncestors()
				.reverse()
				.find(ancestor => {
					return ancestor.is('element', 'section_title');
				});

			if (selectedSectionElement) {
				this.titleSectionChildrenNode = selectedSectionElement.getChildren();
				for (const node of this.titleSectionChildrenNode) {
					if (
						node.is('text') &&
						node.getAttribute('section_title_value')
					) {
						this.value = node.getAttribute('section_title_value');
					}
				}
			}
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

					this.editor.editing.view.change(viewWriter => {
						viewWriter.setAttribute(
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

				this.editor.editing.view.change(viewWriter => {
					viewWriter.setAttribute(
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
		this.isEnabled = true;
	}

	execute() {
		// view side
		const view = this.editor.editing.view;
		const selectedSectionElement = this.getSelectedSectionElement();

		if (!toBool(selectedSectionElement.getAttribute('optional'))) {
			view.change(viewWriter => {
				viewWriter.setAttribute(
					'optional',
					`${!toBool(
						selectedSectionElement.getAttribute('optional')
					)}`,
					selectedSectionElement
				);
				viewWriter.addClass('contract-section', selectedSectionElement);
			});

			const modelElement = this.editor.editing.mapper.toModelElement(
				selectedSectionElement
			);
			this.editor.model.change(modelWriter => {
				modelWriter.setAttribute(
					'optional',
					`${!toBool(
						selectedSectionElement.getAttribute('optional')
					)}`,
					modelElement
				);
			});
		} else {
			view.change(viewWriter => {
				viewWriter.setAttribute(
					'optional',
					`${!toBool(
						selectedSectionElement.getAttribute('optional')
					)}`,
					selectedSectionElement
				);
				viewWriter.removeClass(
					'contract-section',
					selectedSectionElement
				);
			});
			const modelElement = this.editor.editing.mapper.toModelElement(
				selectedSectionElement
			);
			this.editor.model.change(modelWriter => {
				modelWriter.setAttribute(
					'optional',
					`${!toBool(
						selectedSectionElement.getAttribute('optional')
					)}`,
					modelElement
				);
			});
		}
	}

	getSelectedSectionElement() {
		const selection = this.editor.editing.view.document.selection;
		return this.findSectionElement(selection.getFirstPosition());
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
		return (
			node.is('containerElement', 'section') &&
			node.getCustomProperty('sectionElement')
		);
	}
}
