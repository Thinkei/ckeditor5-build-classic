import Command from '@ckeditor/ckeditor5-core/src/command';

const BLOCK_ELEMENT = 'blockElement';

export default class ToggleCommand extends Command {
	refresh() {
		// const selection = this.editor.model.document.selection;
		// const selectedBlockElement = this.getSelectedBlockElement(
		// 	selection.getFirstPosition()
		// );
		// if (selectedBlockElement) {
		// 	this.isEnabled = this.toBool(
		// 		selectedBlockElement.getAttribute('optional')
		// 	);
		// }

		this.isEnabled = true;
	}

	execute() {
		const model = this.editor.model;
		const selection = this.editor.model.document.selection;
		// model element
		const selectedBlockElement = this.getSelectedBlockElement(
			selection.getFirstPosition()
		);
		// view element
		const viewElement = this.editor.editing.mapper.toViewElement(
			selectedBlockElement
		);
		const currentValue = this.toBool(
			selectedBlockElement.getAttribute('optional')
		);
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

		if (
			viewElement.is('containerElement', 'section') &&
			viewElement.getCustomProperty(BLOCK_ELEMENT)
		) {
			// modify view element
			this.editor.editing.view.document.registerPostFixer(viewWriter => {
				viewWriter.removeAttribute('optional', viewElement);
				if (currentValue) {
					viewWriter.setAttribute('optional', 'false', viewElement);
					viewWriter.removeClass('contract-block', viewElement);
					viewWriter.addClass('contract-block-dotted', viewElement);
				} else {
					viewWriter.setAttribute('optional', 'true', viewElement);
					viewWriter.removeClass(
						'contract-block-dotted',
						viewElement
					);
					viewWriter.addClass('contract-block', viewElement);
				}
			});
		}
	}

	getSelectedBlockElement(position) {
		return this.findSelectionAncestor(position);
	}

	findSelectionAncestor(position) {
		return position
			.getAncestors()
			.reverse()
			.find(ancestor => this.isBlockElement(ancestor));
	}

	isBlockElement(node) {
		return node.is('element', 'contract_block');
	}

	// switch "true" to true
	toBool(value) {
		return value === 'true';
	}
}
