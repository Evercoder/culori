import type { Cubehelix } from './types';
import type { Rgb } from '../rgb/types';

declare function convertCubehelixToRgb(color: Omit<Cubehelix, 'mode'>): Rgb;

export default convertCubehelixToRgb;
