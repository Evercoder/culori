const components = {};

components.rgb = ['r', 'g', 'b', 'alpha'];
components.hsl = ['h', 's', 'l', 'alpha'];
components.hsv = ['h', 's', 'v', 'alpha'];
components.hsi = ['h', 's', 'i', 'alpha'];
components.lab = ['l', 'a', 'b', 'alpha'];
components.lch = ['l', 'c', 'h', 'alpha'];
components.hwb = ['h', 'w', 'b', 'alpha'];

export default (color, fn) => 
	components[color.mode].reduce(
		(result, k) => {
			if (color[k] !== undefined) {
				result[k] = fn(k, color[k]);
			}
			return result;
		}, {}
	);