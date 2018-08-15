import { contractSectionSchema } from './contractSection';
import { contractBlockSchema } from './contractBlock';
import { variableImageSchema } from './variableImage';
import { variableDateSchema } from './variableDate';
import { variableStringSchema } from './variableString';
import { variableSignaturePadSchema } from './variableSignaturePad';
import { variableSelectSchema } from './variableSelect';
import { textSchema } from './text';

export const defineSchema = editor => {
	textSchema(editor);
	contractSectionSchema(editor);
	contractBlockSchema(editor);
	variableImageSchema(editor);
	variableDateSchema(editor);
	variableStringSchema(editor);
	variableSignaturePadSchema(editor);
	variableSelectSchema(editor);
};
