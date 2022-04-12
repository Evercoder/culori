import named from '../colors/named.js';
import type { Color } from '../common';

declare function parseNamed(color: keyof typeof named): Color;

export default parseNamed;
