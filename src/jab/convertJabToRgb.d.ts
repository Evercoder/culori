import type { Jab } from './types';
import type { Rgb } from '../rgb/types';

declare function convertJabToRgb(color: Omit<Jab, 'mode'>): Rgb;

export default convertJabToRgb;
