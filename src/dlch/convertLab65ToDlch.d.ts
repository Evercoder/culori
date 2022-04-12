import type { Lab65 } from '../lab65/types';
import type { Dlch } from './types';

declare function convertLab65ToDlch(color: Omit<Lab65, 'mode'>): Dlch;

export default convertLab65ToDlch;
