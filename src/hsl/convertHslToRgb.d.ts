import type { Hsl } from './types';
import type { Rgb } from '../rgb/types';

export default function convertHslToRgb(color: Omit<Hsl, 'mode'>): Rgb;
