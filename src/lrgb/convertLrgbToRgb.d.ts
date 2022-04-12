import type { Lrgb } from './types';
import type { Rgb } from '../rgb/types';

declare function convertLrgbToRgb(
	color: Omit<Lrgb, 'mode'>,
	mode?: string
): Rgb;

export default convertLrgbToRgb;
