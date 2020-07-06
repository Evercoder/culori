import identity from '../util/identity';
import gamma from '../easing/gamma';

/* 
	Monotone spline
	---------------

	Based on:

		Steffen, M.
		"A simple method for monotonic interpolation in one dimension."
		in Astronomy and Astrophysics, Vol. 239, p. 443-450 (Nov. 1990),
      	Provided by the SAO/NASA Astrophysics Data System.

		https://ui.adsabs.harvard.edu/abs/1990A&A...239..443S

	(Reference thanks to `d3/d3-shape`)
*/

const sgn = Math.sign;
const min = Math.min;
const abs = Math.abs;

const monotone = (y_im1, y_i, y_ip1, y_ip2, h, t) => {
	let h2 = h * h;
	let t2 = t * t;
	let t3 = t2 * t;

	let s_i = (y_ip1 - y_i) / h;

	let s_im1 = (y_i - y_im1) / h;
	let p_i = (y_ip1 - y_im1) / (2 * h);
	let yp_i =
		(sgn(s_im1) + sgn(s_i)) * min(abs(s_im1), abs(s_i), 0.5 * abs(p_i));

	let s_ip1 = (y_ip2 - y_ip1) / h;
	let p_ip1 = (y_ip2 - y_i) / (2 * h);
	let yp_ip1 =
		(sgn(s_i) + sgn(s_ip1)) * min(abs(s_i), abs(s_ip1), 0.5 * abs(p_ip1));

	return (
		((yp_i + yp_ip1 - 2 * s_i) / h2) * t3 +
		((3 * s_i - 2 * yp_i - yp_ip1) / h) * t2 +
		yp_i * t +
		y_i
	);
};

const interpolatorSplineMonotoneClamped = arr => t => {
	let n = arr.length - 1;
	let i;
	if (t === 1) {
		i = n - 1;
		t = 1;
	} else {
		i = Math.floor(t * n);
	}
	return monotone(
		i > 0 ? arr[i - 1] : 2 * arr[i] - arr[i + 1],
		arr[i],
		arr[i + 1],
		i < n - 1 ? arr[i + 2] : 2 * arr[i + 1] - arr[i],
		1 / n,
		t - i / n
	);
};

const interpolatorSplineMonotoneClosed = arr => t => {
	let n = arr.length - 1;
	let i;
	if (t === 1) {
		i = n - 1;
		t = 1;
	} else {
		i = Math.floor(t * n);
	}
	return monotone(
		arr[(i - 1 + arr.length) % arr.length],
		arr[i],
		arr[(i + 1) % arr.length],
		arr[(i + 2) % arr.length],
		1 / n,
		t - i / n
	);
};

const interpolatorSplineMonotoneOpen = arr => t => {
	let n = arr.length - 1;
	let i;
	if (t === 1) {
		i = n - 1;
		t = 1;
	} else {
		i = Math.floor(t * n);
	}
	return monotone(
		arr[(i - 1 + arr.length) % arr.length],
		arr[i],
		arr[(i + 1) % arr.length],
		arr[(i + 2) % arr.length],
		1 / n,
		t - i / n
	);
};

const interpolateSplineMonotone = (fixup, type = 'default', γ = 1) => arr => {
	let ease = gamma(γ);
	if (type === 'closed') {
		return t =>
			interpolatorSplineMonotoneClosed((fixup || identity)(arr))(ease(t));
	} else if (type === 'open') {
		return t =>
			interpolatorSplineMonotoneOpen((fixup || identity)(arr))(ease(t));
	} else if (type === 'default') {
		return t =>
			interpolatorSplineMonotoneClamped((fixup || identity)(arr))(
				ease(t)
			);
	}
};

export {
	interpolateSplineMonotone,
	interpolatorSplineMonotoneOpen,
	interpolatorSplineMonotoneClosed,
	interpolatorSplineMonotoneClamped
};
