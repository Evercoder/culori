import type { Rgb } from '../rgb/types';
import type { Lab65WithMode } from './types';

declare function convertRgbToLab65(color: Rgb): Lab65WithMode;

export default convertRgbToLab65;
