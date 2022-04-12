import type { Lch } from './types';
import type { Lab } from '../lab/types';

declare function convertLchToLab(color: Omit<Lch, 'mode'>): Lab;

export default convertLchToLab;
