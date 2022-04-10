import type { Lab65 } from './types';
import type { Xyz65WithMode } from '../xyz65/types';

declare function convertLab65ToXyz65(color: Lab65): Xyz65WithMode;

export default convertLab65ToXyz65;
