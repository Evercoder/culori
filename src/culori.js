import mixin from './util/mixin';

// Constructors
import hsl from './api/hsl';
import hsv from './api/hsv';
import hsi from './api/hsi';

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

	chew,
	spew,

	// Utilities
	parse,
	round
});

export default culori;