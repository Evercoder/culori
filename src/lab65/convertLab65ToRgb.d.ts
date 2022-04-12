import type { Lab65 } from './types';
import type { Rgb } from '../rgb/types';

declare function convertLab65ToRgb(color: Omit<Lab65, 'mode'>): Rgb;

export default convertLab65ToRgb;
