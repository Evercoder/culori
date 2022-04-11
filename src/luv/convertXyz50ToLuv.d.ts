import type { Xyz50 } from '../xyz50/types';
import type { LuvWithMode } from './types';

declare function convertXyz50ToLuv(color: Xyz50): LuvWithMode;

export default convertXyz50ToLuv;
