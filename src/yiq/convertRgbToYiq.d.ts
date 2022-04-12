import type { Rgb } from '../rgb/types';
import type { Yiq } from './types';

declare function convertRgbToYiq(color: Omit<Rgb, 'mode'>): Yiq;

export default convertRgbToYiq;
