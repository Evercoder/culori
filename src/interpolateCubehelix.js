import { degToRad, M } from './cubehelix/constants';
import converter from './converter';

const linear = (a, b, t) => a + t * (b - a);
const rgb = converter('rgb');

export default (starthue = 300, endhue = -240, saturation = 0.5, gamma = 1) => 
	t => rgb({
		mode: 'cubehelix',
		h: linear(starthue, endhue, t),
		l: Math.pow(t, gamma),
		s: saturation
	});