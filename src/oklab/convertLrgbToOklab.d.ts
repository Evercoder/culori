import type { Rgb } from '../rgb/types';
import type { OklabWithMode } from './types';

declare function convertLrgbToOklab(color: Rgb): OklabWithMode;

export default convertLrgbToOklab;
