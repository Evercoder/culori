import type { Xyz65 } from '../xyz65/types';
import type { Lab65WithMode } from './types';

declare function convertXyz65ToLab65(color: Xyz65): Lab65WithMode;

export default convertXyz65ToLab65;
