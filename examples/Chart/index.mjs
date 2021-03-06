/* eslint-disable import/extensions,import/no-unresolved */
import doc from 'grommet/components/Chart/doc';
import { packages, categories } from '../lookups';
import { _starter } from './_starter';
import { color } from './color';
import { onClick } from './onClick';
import { onHover } from './onHover';
import { round } from './round';
import { thickness } from './thickness';
import { type } from './type';
import { values } from './values';


export const Chart = {
  category: categories.visualization,
  package: packages.grommet,
  doc: doc.doc({}).toJSON(),
  examples: {
    _starter,
    color,
    onClick,
    onHover,
    round,
    thickness,
    type,
    values,
  },
};

