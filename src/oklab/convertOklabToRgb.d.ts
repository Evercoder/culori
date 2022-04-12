import type { Oklab } from './types';
import type { Rgb } from '../rgb/types';

declare function convertOklabToRgb(color: Omit<Oklab, 'mode'>): Rgb;

export default convertOklabToRgb;
