import type { Rgb } from '../rgb/types';
import type { Cubehelix } from './types';

declare function convertRgbToCubehelix(color: Omit<Rgb, 'mode'>): Cubehelix;

export default convertRgbToCubehelix;
