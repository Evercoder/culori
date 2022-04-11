import type { Jab } from './types';
import type { Xyz65WithMode } from '../xyz65/types';

declare function convertJabToXyz65(color: Jab): Xyz65WithMode;

export default convertJabToXyz65;
