import type { Rgb } from '../rgb/types';
import type { OklabWithMode } from './types';

declare function convertRgbToOklab(color: Rgb): OklabWithMode;

export default convertRgbToOklab;
