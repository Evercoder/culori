/*
	====================
	Spline interpolation
	====================

	Basis spline
	------------

	Given control points V0...Vn (our values)

		S0 = V0
		...
		Si = 1/6 * Vi-1 + 2/3 * Vi + 1/6 * Vi+1
		...
		Sn = Vn

	The Bézier curve has control points:

		Bi = Si-1, 2/3 * Vi-1 + 1/3 * Vi, 1/3 * Vi-1 + 2/3 * Vi, Si

	Which we can then factor into the Bezier's explicit form:
	
		B(t) = (1-t)^3 * P0 + 3 * (1-t)^2 * t * P1 + (1-t) * t^2 * P2 + t^3 * P3 

 */

const bspline = (Vim2, Vim1, Vi, Vip1, t) => {
	let t2 = t * t;
	let t3 = t2 * t;
	return (
		(1 - 3 * t + 3 * t2 - t3) * Vim2 +
		(4 - 6 * t2 + 3 * t3) * Vim1 +
		(1 + 3 * t + 3 * t2 - 3 * t3) * Vi +
		t3 * Vip1
	) / 6;
}

const solve = (v) => {
	var i; 
	var n = v.length - 1;
	var c = new Array(n);
	var _v = new Array(n);
	var sol = new Array(n);
	
	c[1] = 1/4, _v[1] = (6 * v[1] - v[0])/4;
	
	for (i = 2; i < n; ++i) {
		c[i] = 1 / (4 - c[i-1]); 
		_v[i] = (6 * v[i] - (i == n-1 ? v[n] : 0) - _v[i-1]) * c[i];
	}
	
	sol[0] = v[0];
	sol[n] = v[n];
	if (n - 1 > 0) {
		sol[n-1] = _v[n-1];
	}
	
	for (i = n-2; i > 0; --i) {
		sol[i] = _v[i] - c[i] * sol[i+1];
	}
	
	return sol;
};

const invariant = values => values;

export default (normalize = invariant, method = 'bspline', γ = 1) =>

	(arr, t) => {

		t = Math.pow(t, γ);

		let classes = arr.length - 1;
		let i = t === 1 ? classes - 1 : Math.floor(t * classes);

		if (method === 'natural') {
			arr = solve(arr);
		}

		let Vim1 = arr[i];
		let Vi = arr[i+1];

		let Vim2 = i > 0 ? arr[i-1] : 2 * Vim1 - Vi;
		let Vip1 = i < classes - 1 ? arr[i+2] : 2 * Vi - Vim1;

		let v = normalize([Vim2, Vim1, Vi, Vip1]);

		return typeof v === 'object' ? 
			bspline(v[0], v[1], v[2], v[3], (t - i / classes) * classes)
			: v;
	};