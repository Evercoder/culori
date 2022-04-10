import type { Color, Mode } from './common';
import { Find } from './common';

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

declare function blend<M extends Mode = 'rgb'>(
	colors: (Color | string)[],
	type: BlendTypes | BlendingFunction,
	mode?: M
): Find<Color, M>;

export default blend;
