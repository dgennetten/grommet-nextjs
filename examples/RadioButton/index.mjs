/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/RadioButton/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { checked } from './checked';
import { disabled } from './disabled';
import { label } from './label';


export const RadioButton = {
  category: categories.input,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    checked,
    disabled,
    label,
  },
};

