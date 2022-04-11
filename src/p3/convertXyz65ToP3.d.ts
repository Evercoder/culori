import type { Xyz65 } from '../xyz65/types';
import type { P3WithMode } from './types';

declare function convertXyz65ToP3(color: Xyz65): P3WithMode;

export default convertXyz65ToP3;
