import type { Xyz50 } from '../xyz50/types';
import type { ProphotoWithMode } from './types';

declare function convertXyz50ToProphoto(color: Xyz50): ProphotoWithMode;

export default convertXyz50ToProphoto;
