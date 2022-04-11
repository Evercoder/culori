import type { Oklab } from './types';
import type { LrgbWithMode } from '../lrgb/types';

declare function convertOklabToLrgb(color: Oklab): LrgbWithMode;

export default convertOklabToLrgb;
