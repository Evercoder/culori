export function formDataMap(form, mappings = {}) {
	const excludedTags = ['FIELDSET', 'OBJECT', 'OUTPUT'];
	const excludedTypes = ['button', 'submit', 'reset', 'image'];

	function shouldSubmit(el) {
		if (!el.name) return false;
		if (excludedTags.includes(el.tagName)) return false;
		if (excludedTypes.includes(el.type)) return false;
		if (el.type === 'radio' && !el.checked) return false;
		if (el.type === 'checkbox' && !el.checked) return false;
		if (el.disabled || el.matches(':disabled')) return false;
		if (el.closest('datalist')) return false;
		return true;
	}

	const result = {};

	function append(key, val) {
		if (Object.hasOwn(mappings, key)) {
			val = mappings[key](val);
		}
		result[key] = Object.hasOwn(result, key)
			? [].concat(result[key], val)
			: val;
	}

	Array.from(form.elements).forEach(el => {
		if (!shouldSubmit(el)) return;
		const { name, type } = el;
		if (type === 'number' || type === 'range') {
			append(name, +el.value);
		} else if (type === 'date' || type === 'datetime-local') {
			append(name, el.valueAsDate());
		} else if (type === 'file') {
			append(name, el.files);
		} else if (type === 'url') {
			append(name, new URL(el.value));
		} else if (type === 'select-one' || type === 'select-multiple') {
			Array.from(el.selectedOptions).forEach(option =>
				append(name, option.value)
			);
		} else {
			append(name, el.value);
		}
	});

	return result;
}

const to255 = v => Math.round(Math.max(0, Math.min(1, v)) * 255);

export function draw(canvas, fn) {
	const ctx = canvas.getContext('2d');
	const w = canvas.width;
	const h = canvas.height;
	const imageData = ctx.createImageData(w, h);
	for (let idx = 0, color; idx < imageData.data.length; ) {
		color = fn((idx / 4) % w, Math.floor(idx / 4 / w));
		if (!color) {
			throw new Error('no color');
		}
		imageData.data[idx++] = to255(color.r);
		imageData.data[idx++] = to255(color.g);
		imageData.data[idx++] = to255(color.b);
		imageData.data[idx++] = 255;
	}
	ctx.putImageData(imageData, 0, 0);
}

export function plotFunction(fn, domain, step = 1) {
	const points = [];
	const range = [Infinity, -Infinity];
	let res, i;
	for (i = domain[0]; i <= domain[1]; i += step) {
		res = fn(i);
		if (res < range[0]) {
			range[0] = res;
		}
		if (res > range[1]) {
			range[1] = res;
		}
		points.push([i, res]);
	}
	return { points, range };
}

export function scaleLinear(domain, range) {
	return v => {
		const t = (v - domain[0]) / (domain[1] - domain[0]);
		return (t - 1) * range[0] + t * range[1];
	};
}

export function scalePow(domain, range, exponent) {
	return v => {
		const t = Math.pow((v - domain[0]) / (domain[1] - domain[0]), exponent);
		return (t - 1) * range[0] + t * range[1];
	};
}
