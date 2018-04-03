import rgb_to_xyz from './rgb_to_xyz';
import xyz_to_lab from './xyz_to_lab';

export default rgb => {
	let res = xyz_to_lab(rgb_to_xyz(rgb));
	res.mode = 'lab';
	if (rgb.alpha !== undefined) res.alpha = rgb.alpha;
	return res;
};