import type { RgbWithMode } from '../rgb/types';
import type { Lab } from './types';

declare function convertLabToRgb(color: Lab): RgbWithMode;

export default convertLabToRgb;
