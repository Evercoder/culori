import type { Lab65 } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertLab65ToRgb(color: Lab65): RgbWithMode;

export default convertLab65ToRgb;
