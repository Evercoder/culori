import type { Oklab } from './types';
import type { Lrgb } from '../lrgb/types';

declare function convertOklabToLrgb(color: Omit<Oklab, 'mode'>): Lrgb;

export default convertOklabToLrgb;
