import mixin from './util/mixin';

// Constructors
import hsl from './api/hsl';
import hsv from './api/hsv';
import hsi from './api/hsi';

// Converters
import from_hsl from './converters/from_hsl';
import from_hsv from './converters/from_hsv';
import from_hsi from './converters/from_hsi';
import to_hsl from './converters/to_hsl';
import to_hsv from './converters/to_hsv';
import to_hsi from './converters/to_hsi';

// Colors
import colors from './colors/index';

// Utilities
import parse from './api/parse';
import round from './api/round';
import flags from './api/flags';
import chew from './api/chew';
import spew from './api/spew';

const culori = color => parse(color);

// Flags
mixin(culori, flags);

// Colors
mixin(culori, colors);

mixin(culori, {

	// Constructors
	hsl,
	hsv,
	hsi,

	// Converters
	from_hsl,
	from_hsv,
	from_hsi,
	to_hsl,
	to_hsv,
	to_hsi,

	chew,
	spew,

	// Utilities
	parse,
	round
});

export default culori;