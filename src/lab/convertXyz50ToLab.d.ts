import type { Xyz50 } from '../xyz50/types';
import type { Lab } from './types';

declare function convertXyz50ToLab(color: Omit<Xyz50, 'mode'>): Lab;

export default convertXyz50ToLab;
