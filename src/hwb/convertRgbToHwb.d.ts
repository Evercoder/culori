import type { Rgb } from '../rgb/types';
import type { Hwb } from './types';

export default function convertRgbToHwb(color: Omit<Rgb, 'mode'>): Hwb;
