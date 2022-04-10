import type { Rgb } from '../rgb/types';
import type { CubehelixWithMode } from './types';

declare function convertRgbToCubehelix(color: Rgb): CubehelixWithMode;

export default convertRgbToCubehelix;
