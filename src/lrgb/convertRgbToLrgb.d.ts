import type { Rgb } from '../rgb/types';
import type { LrgbWithMode } from './types';

declare function convertRgbToLrgb(color: Rgb): LrgbWithMode;

export default convertRgbToLrgb;
