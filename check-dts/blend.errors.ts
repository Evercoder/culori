import blend from '../src/blend';
import type { Rgb } from '../src/rgb/types';
import type { Jab } from '../src/jab/types';

// THROWS Argument of type '[]' is not assignable to parameter of type 'NonEmptyArray<string | Color>'.
const c1 = blend([]);

// THROWS Type 'number' is not assignable to type 'string | Color'.
const c2: Rgb = blend([12312]);

const c3: Rgb = blend(
	['white', 'rgba(0, 0, 0, 0.5)'],
	// THROWS Argument of type '"darke"' is not assignable to parameter of type 'BlendTypes | BlendingFunction'.
	'darke'
);

// THROWS Type 'Jab' is missing the following properties from type 'Rgb': r, g
const c4: Rgb = blend(['white', 'rgba(0, 0, 0, 0.5)'], 'darken', 'jab');
