import { contractSectionSchema } from './contractSection';
import { variableImageSchema } from './variableImage';
import { variableDateSchema } from './variableDate';
import { variableStringSchema } from './variableString';
import { variableSignaturePadSchema } from './variableSignaturePad';
import { variableSelectSchema } from './variableSelect';
import { textSchema } from './text';
import { headingSchema } from './heading';
import { contractBlockSchema } from './contractBlock';
import { tableSchema } from './table';
import { listItemSchema } from './list';
import { spanSchema } from './span';

export function defineSchema(editor) {
	contractBlockSchema(editor);
	headingSchema(editor);
	contractSectionSchema(editor);
	variableImageSchema(editor);
	variableDateSchema(editor);
	variableStringSchema(editor);
	variableSignaturePadSchema(editor);
	variableSelectSchema(editor);
	textSchema(editor);
	tableSchema(editor);
	listItemSchema(editor);
	spanSchema(editor);
}
