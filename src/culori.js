import hsl from './api/hsl';
import hsv from './api/hsv';
import hsi from './api/hsi';
import rgb from './api/rgb';
import parse from './api/parse';
import round from './api/round';
import flags from './api/flags';
import convert from './api/convert';
import colors from './api/colors/index';

import mixin from './util/mixin';

const culori = color => rgb(color);

mixin(
	culori, 
	flags, 
	colors, 
	{
		hsl,
		hsv,
		hsi,
		rgb,
		convert,
		parse,
		round
	}
);

export default culori;