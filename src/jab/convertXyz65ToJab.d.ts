import type { Xyz65 } from '../xyz65/types';
import type { JabWithMode } from './types';

declare function convertXyz65ToJab(color: Xyz65): JabWithMode;

export default convertXyz65ToJab;
