import type { Okhsv } from './types';
import type { Oklab } from '../oklab/types';

declare function convertOkhsvToOklab(color: Omit<Okhsv, 'mode'>): Oklab;

export default convertOkhsvToOklab;
