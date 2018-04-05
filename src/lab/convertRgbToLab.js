import convertRgbToXyz from './convertRgbToXyz';
import convertXyzToLab from './convertXyzToLab';

export default rgb => {
	let res = convertXyzToLab(convertRgbToXyz(rgb));
	res.mode = 'lab';
	if (rgb.alpha !== undefined) res.alpha = rgb.alpha;
	return res;
};