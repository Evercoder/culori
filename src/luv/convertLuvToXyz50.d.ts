import type { Luv } from './types';
import type { Xyz50WithMode } from '../xyz50/types';

declare function convertLuvToXyz50(color: Luv): Xyz50WithMode;

export default convertLuvToXyz50;
