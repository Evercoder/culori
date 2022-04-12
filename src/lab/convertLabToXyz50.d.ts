import type { Lab } from './types';
import type { Xyz50 } from '../xyz50/types';

declare function convertLabToXyz50(color: Omit<Lab, 'mode'>): Xyz50;

export default convertLabToXyz50;
