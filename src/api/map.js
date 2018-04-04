const components = {};

components.rgb = ['r', 'g', 'b', 'alpha'];
components.hsl = ['h', 's', 'l', 'alpha'];
components.hsv = ['h', 's', 'v', 'alpha'];
components.hsi = ['h', 's', 'i', 'alpha'];
components.lab = ['l', 'a', 'b', 'alpha'];
components.lch = ['l', 'c', 'h', 'alpha'];
components.hwb = ['h', 'w', 'b', 'alpha'];
components.lrgb = ['r', 'g', 'b', 'alpha'];

export default (color, fn) => {
	let c = components[color.mode].reduce(
		(result, k) => {
			let res = fn(k, color[k]);
			if (res !== undefined) {
				result[k] = res;
			}
			return result;
		}, 
		{}
	);
	c.mode = color.mode;
	return c;
}