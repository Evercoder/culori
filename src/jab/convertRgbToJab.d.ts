import type { Rgb } from '../rgb/types';
import type { Jab } from './types';

declare function convertRgbToJab(color: Omit<Rgb, 'mode'>): Jab;

export default convertRgbToJab;
