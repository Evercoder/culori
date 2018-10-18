import convertRgbToYiq from './convertRgbToYiq';
import convertYiqToRgb from './convertYiqToRgb';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';

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
	interpolate: {
		y: interpolateFunctionLinear(interpolateNumber()),
		i: interpolateFunctionLinear(interpolateNumber()),
		q: interpolateFunctionLinear(interpolateNumber()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};
