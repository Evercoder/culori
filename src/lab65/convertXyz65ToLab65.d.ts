import type { Xyz65 } from '../xyz65/types';
import type { Lab65 } from './types';

declare function convertXyz65ToLab65(color: Omit<Xyz65, 'mode'>): Lab65;

export default convertXyz65ToLab65;
