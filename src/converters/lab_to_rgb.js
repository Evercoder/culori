import lab_to_xyz from './lab_to_xyz';
import xyz_to_rgb from './xyz_to_rgb';

export default lab => {
	let res = xyz_to_rgb(lab_to_xyz(lab));
	res.mode = 'rgb';
	if (lab.alpha !== undefined) res.alpha = lab.alpha;
	return res;
};