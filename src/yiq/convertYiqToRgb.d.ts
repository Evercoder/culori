import type { Yiq } from './types';
import type { Rgb } from '../rgb/types';

declare function convertYiqToRgb(color: Omit<Yiq, 'mode'>): Rgb;

export default convertYiqToRgb;
