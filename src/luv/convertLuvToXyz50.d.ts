import type { Luv } from './types';
import type { Xyz50 } from '../xyz50/types';

declare function convertLuvToXyz50(color: Omit<Luv, 'mode'>): Xyz50;

export default convertLuvToXyz50;
