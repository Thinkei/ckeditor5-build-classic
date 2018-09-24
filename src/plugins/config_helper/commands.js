import Command from '@ckeditor/ckeditor5-core/src/command';
import Mapper from '@ckeditor/ckeditor5-engine/src/conversion/mapper';
import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import ViewDocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import ViewDocument from '@ckeditor/ckeditor5-engine/src/view/document';
import ViewWriter from '@ckeditor/ckeditor5-engine/src/view/writer';
import ModelRange from '@ckeditor/ckeditor5-engine/src/model/range';
import {
	insertElement,
	insertText
} from '@ckeditor/ckeditor5-engine/src/conversion/downcast-converters';

const toView = modelRoot => {
	const mapper = new Mapper();

	const downcastDispatcher = new DowncastDispatcher({
		mapper
	});

	downcastDispatcher.on('insert:$text', insertText(), {
		priority: 'highest'
	});

	downcastDispatcher.on(
		'insert',
		insertElement((modelElement, viewWriter) => {
			switch (modelElement.name) {
				case 'paragraph':
					return viewWriter.createContainerElement(
						'p',
						modelElement._attrs
					);
				default:
					return viewWriter.createContainerElement(
						modelElement.name,
						modelElement._attrs
					);
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

const getData = () => {
	const viewFragment = toView(editor.data.model.document.getRoot());
	return editor.data.processor.toData(viewFragment);
};

export class OnSaveCommamnd extends Command {
	refresh() {
		this.isEnabled = true;
	}

	execute() {
		getData();
	}
}
