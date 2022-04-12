import parse from './parse.js';
import type { Color, Find, Mode } from './common';

declare function prepare(color: undefined): undefined;
declare function prepare(color: string): ReturnType<typeof parse>;
declare function prepare<M extends Mode>(color: Find<Color, M>): Find<Color, M>;
declare function prepare<M extends Mode>(
	color: Omit<Find<Color, M>, 'mode'>,
	mode: M
): Find<Color, M>;
declare function prepare<M extends Mode>(
	color: unknown,
	mode?: undefined
): undefined;

export default prepare;
