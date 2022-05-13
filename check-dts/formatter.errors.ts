import { Color, formatRgb } from '../fn';

declare const color: Color;

// THROWS No overload matches this call
const str: string = formatRgb(color);
