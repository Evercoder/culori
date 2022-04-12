import type { Rgb } from '../rgb/types';
import type { Hsl } from './types';

export default function convertRgbToHsl(color: Omit<Rgb, 'mode'>): Hsl;
