import type { A98 } from './types';
import type { Xyz50 } from '../xyz50/types';

declare function convertA98ToXyz65(color: Omit<A98, 'mode'>): Xyz50;

export default convertA98ToXyz65;
