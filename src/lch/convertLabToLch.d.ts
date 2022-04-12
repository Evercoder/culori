import type { Lab } from '../lab/types';
import type { Lch } from './types';

declare function convertLabToLch(color: Omit<Lab, 'mode'>): Lch;

export default convertLabToLch;
