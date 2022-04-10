import type { Lrgb } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertLrgbToRgb(color: Lrgb, mode: 'rgb'): RgbWithMode;

export default convertLrgbToRgb;
