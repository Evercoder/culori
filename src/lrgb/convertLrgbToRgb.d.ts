import { Lrgb } from './types';
import { Rgb } from '../rgb/types';

declare function convertLrgbToRgb(
	color: Omit<Lrgb, 'mode'>,
	mode?: string
): Rgb;

export default convertLrgbToRgb;
