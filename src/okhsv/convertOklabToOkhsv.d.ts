import type { Oklab } from '../oklab/types';
import type { Okhsv } from './types';

declare function convertOklabToOkhsv(color: Omit<Oklab, 'mode'>): Okhsv;

export default convertOklabToOkhsv;
