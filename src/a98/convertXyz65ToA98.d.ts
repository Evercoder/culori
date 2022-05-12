import { Xyz50 } from '../xyz50/types';
import { A98 } from './types';

declare function convertXyz65ToA98(color: Omit<Xyz50, 'mode'>): A98;

export default convertXyz65ToA98;
