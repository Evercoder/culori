import { Lab } from '../lab/types';
import { Lch } from './types';

declare function convertLabToLch(color: Omit<Lab, 'mode'>): Lch;

export default convertLabToLch;
