import lab_to_xyz from './lab_to_xyz';
import d50_to_d65 from './d50_to_d65';
import xyz_to_lrgb from './xyz_to_lrgb';
import lrgb_to_rgb from './lrgb_to_rgb';

export default lab => {
	let res = lrgb_to_rgb(xyz_to_lrgb(d50_to_d65(lab_to_xyz(lab))));
	res.mode = 'rgb';
	if (lab.alpha !== undefined) res.alpha = lab.alpha;
	return res;
};