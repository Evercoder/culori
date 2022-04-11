import parse from './parse.js';
import type { Color, Mode } from './common';

declare function prepare(color: undefined): undefined;
declare function prepare(color: string): ReturnType<typeof parse>;
declare function prepare(color: Color): Color;
declare function prepare<M extends Mode>(
	color: Omit<Color, 'mode'> & { mode?: M },
	mode: M
): Color;
declare function prepare<M extends Mode>(
	color: Omit<Color, 'mode'> & { mode?: M },
	mode: undefined
): undefined;

export default prepare;
