import type { Rgb } from '../rgb/types';
import type { Xyz50WithMode } from './types';

declare function convertRgbToXyz50(rgb: Rgb): Xyz50WithMode;

export default convertRgbToXyz50;
