import type { Rgb } from '../rgb/types';
import type { Lab } from './types';

declare function convertRgbToLab(color: Omit<Rgb, 'mode'>): Lab;

export default convertRgbToLab;
