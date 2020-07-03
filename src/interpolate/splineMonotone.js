import identity from '../util/identity';

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

const sgn = Math.sign,
	min = Math.min,
	abs = Math.abs;

const monotone = (y_im1, y_i, y_ip1, y_ip2, h, t) => {
	let h2 = h * h;
	let t2 = t * t;
	let t3 = t2 * t;

	let s_im1 = (y_i - y_im1) / h;
	let s_i = (y_ip1 - y_i) / h;
	let s_ip1 = (y_ip2 - y_ip1) / h;

	let yp_i =
		(sgn(s_im1) + sgn(s_i)) *
		min(abs(s_im1), abs(s_i), 0.5 * abs((y_ip1 - y_im1) / (2 * h)));
	let yp_ip1 =
		(sgn(s_i) + sgn(s_ip1)) *
		min(abs(s_i), abs(s_ip1), 0.5 * abs((y_ip2 - y_i) / (2 * h)));

	return (
		((yp_i + yp_ip1 - 2 * si) / h2) * t3 +
		((3 * si - 2 * yp_i - yp_ip1) / h) * t2 +
		yp_i * t +
		y_i
	);
};

export default (
	normalize = identity,
	type = 'default',
	γ = 1
) => original_arr => {
	let arr = (normalize || identity)(original_arr);

	return t => {
		t = Math.pow(t, γ);

		let n = arr.length - 1;

		let i;
		if (t === 1) {
			i = n - 1;
			t = 1;
		} else {
			i = Math.floor(t * n);
		}

		switch (type) {
			case 'default':
				return monotone(
					i > 0 ? arr[i - 1] : 2 * arr[i] - arr[i + 1],
					arr[i],
					arr[i + 1],
					i < n - 1 ? arr[i + 2] : 2 * arr[i + 1] - arr[i],
					1 / n,
					t - i / n
				);
			case 'closed':
				return monotone(
					arr[(i - 1 + arr.length) % arr.length],
					arr[i],
					arr[(i + 1) % arr.length],
					arr[(i + 2) % arr.length],
					1 / n,
					t - i / n
				);
			case 'open':
				throw new Error('open monotone spline not implemented yet');
		}
	};
};
