/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Accordion/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';

export const Accordion = {
  category: categories.controls,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
  },
};

