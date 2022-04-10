import type { Xyz50 } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertXyz50ToRgb(color: Xyz50): RgbWithMode;

export default convertXyz50ToRgb;
