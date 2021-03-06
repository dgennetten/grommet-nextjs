/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Table/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';


export const Table = {
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
  },
};

