import convertRgbToYiq from './convertRgbToYiq';
import convertYiqToRgb from './convertYiqToRgb';
import interpolateLinear from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

/*
	YIQ Color Space

	References
	----------

	Wikipedia:
		https://en.wikipedia.org/wiki/YIQ

	"Measuring perceived color difference using YIQ NTSC
	transmission color space in mobile applications"
		
		by Yuriy Kotsarenko, Fernando Ramos in:
		Programación Matemática y Software (2010) 

	Available at:
		
		http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
 */

export default {
	mode: 'yiq',
	output: {
		rgb: convertYiqToRgb
	},
	input: {
		rgb: convertRgbToYiq
	},
	channels: ['y', 'i', 'q', 'alpha'],
	ranges: {
		i: [-0.593, 0.593],
		q: [-0.52, 0.52]
	},
	interpolate: {
		y: interpolateLinear(),
		i: interpolateLinear(),
		q: interpolateLinear(),
		alpha: interpolateLinear(fixupAlpha)
	}
};
