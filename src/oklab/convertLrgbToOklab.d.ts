import type { Lrgb } from '../lrgb/types';
import type { Oklab } from './types';

declare function convertLrgbToOklab(color: Omit<Lrgb, 'mode'>): Oklab;

export default convertLrgbToOklab;
