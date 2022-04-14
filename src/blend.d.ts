import type { Color, Mode, NonEmptyArray } from './common';
import { Find } from './common';
import type { Rgb } from './rgb/types';

// TODO: find out how to import BLENDS dictionary from './blend.js
type BlendTypes =
	| 'normal'
	| 'multiply'
	| 'screen'
	| 'hard-light'
	| 'overlay'
	| 'darken'
	| 'lighten'
	| 'color-dodge'
	| 'color-burn'
	| 'soft-light'
	| 'difference'
	| 'exclusion';

type BlendingFunction = (backdrop: number, source: number) => number;

declare function blend(colors: NonEmptyArray<Color | string>): Rgb;
declare function blend(
	colors: NonEmptyArray<Color | string>,
	type: BlendTypes | BlendingFunction
): Rgb;
declare function blend<M extends Mode>(
	colors: (Color | string)[],
	type: BlendTypes | BlendingFunction,
	mode: M
): Find<Color, M>;

export default blend;
