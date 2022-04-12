import type { Rgb } from '../rgb/types';
import type { Lrgb } from './types';

declare function convertRgbToLrgb(color: Omit<Rgb, 'mode'>): Lrgb;

export default convertRgbToLrgb;
