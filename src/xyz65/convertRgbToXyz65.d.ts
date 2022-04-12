import type { Rgb } from '../rgb/types';
import type { Xyz65 } from './types';

declare function convertRgbToXyz65(color: Omit<Rgb, 'mode'>): Xyz65;

export default convertRgbToXyz65;
