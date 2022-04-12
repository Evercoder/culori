import type { Rgb } from '../rgb/types';
import type { Xyz50 } from './types';

declare function convertRgbToXyz50(rgb: Omit<Rgb, 'mode'>): Xyz50;

export default convertRgbToXyz50;
