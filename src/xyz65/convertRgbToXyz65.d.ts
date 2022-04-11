import type { Rgb } from '../rgb/types';
import type { Xyz65WithMode } from './types';

declare function convertRgbToXyz65(color: Rgb): Xyz65WithMode;

export default convertRgbToXyz65;
