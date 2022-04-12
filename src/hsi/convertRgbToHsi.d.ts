import type { Rgb } from '../rgb/types';
import type { Hsi } from './types';

export default function convertRgbToHsi(color: Omit<Rgb, 'mode'>): Hsi;
