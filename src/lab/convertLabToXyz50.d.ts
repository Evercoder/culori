import type { Lab } from './types';
import type { Xyz50WithMode } from '../xyz50/types';

declare function convertLabToXyz50(color: Lab): Xyz50WithMode;

export default convertLabToXyz50;
