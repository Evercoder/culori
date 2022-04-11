import type { Lchuv } from './types';
import type { LuvWithMode } from '../luv/types';

declare function convertLchuvToLuv(color: Lchuv): LuvWithMode;

export default convertLchuvToLuv;
