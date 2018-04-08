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
	let t2 = t * t;  // t^2
	let t3 = t2 * t; // t^3
	return (
		(1 - 3 * t + 3 * t2 - t3) * Vim2 +
		(4 - 6 * t2 + 3 * t3) * Vim1 +
		(1 + 3 * t + 3 * t2 - 3 * t3) * Vi +
		t3 * Vip1
	) / 6;
}

const invariant = values => values;

export default (method = bspline, normalize = invariant) =>

	(arr, t) => {

		let classes = arr.length - 1;
		let i = t === 1 ? classes - 1 : Math.floor(t * classes);

		let Vim1 = arr[i];
		let Vi = arr[i+1];

		let Vim2 = i > 0 ? arr[i-1] : 2 * Vim1 - Vi;
		let Vip1 = i < classes - 1 ? arr[i+2] : 2 * Vi - Vim1;

		[Vim2, Vim1, Vi, Vip1] = normalize([Vim2, Vim1, Vi, Vip1]);

		return bspline(Vim2, Vim1, Vi, Vip1, (t - i / classes) * classes);
	};