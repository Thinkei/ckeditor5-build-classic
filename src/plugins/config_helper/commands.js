import Command from '@ckeditor/ckeditor5-core/src/command';
import ViewDocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import ViewDocument from '@ckeditor/ckeditor5-engine/src/view/document';
import ViewWriter from '@ckeditor/ckeditor5-engine/src/view/writer';
import ModelRange from '@ckeditor/ckeditor5-engine/src/model/range';
import {
	insertElement,
	insertText
} from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

const toView = (modelRoot, editor) => {
	const mapper = editor.data.mapper;

	const downcastDispatcher = editor.data.downcastDispatcher;

	downcastDispatcher.on('insert:$text', insertText(), {
		priority: 'highest'
	});

	downcastDispatcher.on(
		'insert',
		insertElement((modelElement, viewWriter) => {
			switch (modelElement.name) {
				case 'contract_section':
				case 'contract_block':
				case 'variable_string':
				case 'variable_select':
				case 'variable_date':
				case 'variable_signature_pad':
				case 'variable_image': {
					return viewWriter.createContainerElement(
						modelElement.name,
						modelElement._attrs
					);
				}
			}
		}),
		{
			priority: 'high'
		}
	);

	const modelRange = ModelRange.createIn(modelRoot);
	const viewDocumentFragment = new ViewDocumentFragment();
	const viewWriter = new ViewWriter(new ViewDocument());
	mapper.bindElements(modelRoot, viewDocumentFragment);
	downcastDispatcher.convertInsert(modelRange, viewWriter);
	mapper.clearBindings();
	return viewDocumentFragment;
};

const getData = editor => {
	const viewFragment = toView(editor.data.model.document.getRoot(), editor);
	return editor.data.processor.toData(viewFragment);
};

export class OnSaveCommamnd extends Command {
	constructor(editor) {
		super(editor);
		this.value = null;
	}

	refresh() {
		this.isEnabled = true;
		this.value = this.value;
	}

	execute() {
		this.value = getData(this.editor);
		setTimeout(this.editor.fire('save'), 1000);
	}
}

export class OpenEditContractCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}
	execute() {
		// fire event for front-end's listening
		this.editor.fire('openEditContract');
	}
}

export class OpenVariableManagerCommand extends Command {
	refresh() {
		this.isEnabled = true;
	}
	execute() {
		this.editor.fire('openVariableManager');
	}
}

export class OpenTutorialScreen extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		this.editor.fire('openTutorialScreen');
	}
}
