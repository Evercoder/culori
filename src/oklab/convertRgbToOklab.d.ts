import type { Rgb } from '../rgb/types';
import type { Oklab } from './types';

declare function convertRgbToOklab(color: Omit<Rgb, 'mode'>): Oklab;

export default convertRgbToOklab;
