import type { Luv } from '../luv/types';
import type { LchuvWithMode } from './types';

declare function convertLuvToLchuv(color: Luv): LchuvWithMode;

export default convertLuvToLchuv;
