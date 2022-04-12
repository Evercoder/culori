import type { Rgb } from '../rgb/types';
import type { Lab65 } from './types';

declare function convertRgbToLab65(color: Omit<Rgb, 'mode'>): Lab65;

export default convertRgbToLab65;
