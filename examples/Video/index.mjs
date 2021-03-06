/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Video/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { controls } from './controls';
import { fit } from './fit';


export const Video = {
  category: categories.media,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    controls,
    fit,
  },
};

