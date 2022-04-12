import type { Rgb } from '../rgb/types';
import type { Hsv } from './types';

export default function convertRgbToHsv(color: Omit<Rgb, 'mode'>): Hsv;
