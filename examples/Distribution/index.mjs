/* eslint-disable import/extensions,import/no-unresolved */
import { packages, categories } from '../lookups';
import { _starter } from './_starter';

export const Distribution = {
  category: categories.visualization,
  package: packages.grommet,
  examples: {
    _starter,
  },
};
