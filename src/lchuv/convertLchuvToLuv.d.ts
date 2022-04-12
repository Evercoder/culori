import type { Lchuv } from './types';
import type { Luv } from '../luv/types';

declare function convertLchuvToLuv(color: Omit<Lchuv, 'mode'>): Luv;

export default convertLchuvToLuv;
