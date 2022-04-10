import type { Cubehelix } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertCubehelixToRgb(color: Cubehelix): RgbWithMode;

export default convertCubehelixToRgb;
