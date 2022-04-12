import type { Hsv } from './types';
import type { Rgb } from '../rgb/types';

export default function convertHsvToRgb(color: Omit<Hsv, 'mode'>): Rgb;
