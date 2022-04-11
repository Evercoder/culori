import type { Oklab } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertOklabToRgb(color: Oklab): RgbWithMode;

export default convertOklabToRgb;
