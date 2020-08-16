import convertRgbToXyz from '../xyz/convertRgbToXyz';
import convertXyzToLab from './convertXyzToLab';

export default rgb => {
	let res = convertXyzToLab(convertRgbToXyz(rgb));

	// Fixes achromatic RGB colors having a _slight_ chroma due to floating-point errors
	// and approximated computations in sRGB <-> CIELab.
	// See: https://github.com/d3/d3-color/pull/46
	if (rgb.r === rgb.b && rgb.b === rgb.g) {
		res.a = res.b = 0;
	}
	return res;
};
