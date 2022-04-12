import type { Rgb } from '../rgb/types';
import type { Lab } from './types';

declare function convertLabToRgb(color: Omit<Lab, 'mode'>): Rgb;

export default convertLabToRgb;
