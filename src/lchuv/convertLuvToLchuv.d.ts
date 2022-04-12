import type { Luv } from '../luv/types';
import type { Lchuv } from './types';

declare function convertLuvToLchuv(color: Omit<Luv, 'mode'>): Lchuv;

export default convertLuvToLchuv;
