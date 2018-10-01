import { contractSectionSchema } from './contractSection';
import { variableImageSchema } from './variableImage';
import { variableDateSchema } from './variableDate';
import { variableStringSchema } from './variableString';
import { variableSignaturePadSchema } from './variableSignaturePad';
import { variableSelectSchema } from './variableSelect';
import { textSchema } from './text';
import { headingSchema } from './heading';
import { tableSchema } from './table';
import { sectionTitleSchema } from './sectionTitle';
import { contractBlockSchema } from './contractBlock';

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
	sectionTitleSchema(editor);
}
