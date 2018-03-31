import rgb_to_xyz from './rgb_to_xyz';
import d65_to_d50 from './d65_to_d50';
import xyz_to_lab from './xyz_to_lab';

export default rgb => {
	let res = xyz_to_lab(d65_to_d50(rgb_to_xyz(rgb)));
	res.mode = 'lab';
	if (rgb.alpha !== undefined) res.alpha = rgb.alpha;
	return res;
};