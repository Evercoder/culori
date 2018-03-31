import hsl from './api/hsl';
import hsv from './api/hsv';
import hsi from './api/hsi';
import rgb from './api/rgb';
import css from './api/css';
import parse from './api/parse';
import round from './api/round';
import convert from './api/convert';
import prepare from './api/prepare';
import colors from './api/colors/index';

const culori = color => rgb(color);

Object.assign(
	culori, 
	colors, 
	{
		hsl,
		hsv,
		hsi,
		rgb,
		css,
		convert,
		prepare,
		parse,
		round
	}
);

export default culori;