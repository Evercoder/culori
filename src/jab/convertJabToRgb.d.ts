import type { Jab } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertJabToRgb(color: Jab): RgbWithMode;

export default convertJabToRgb;
