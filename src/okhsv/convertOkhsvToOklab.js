/*
	Copyright (c) 2021 Björn Ottosson

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
	of the Software, and to permit persons to whom the Software is furnished to do
	so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
 */

import convertOklabToLrgb from '../oklab/convertOklabToLrgb.js';
import { get_ST_max, toe_inv } from '../okhsl/helpers.js';

export default function convertOkhsvToOklab(hsv) {
	// TODO achromatic (h missing or s = 0)
	let a_ = Math.cos((hsv.h / 180) * Math.PI);
	let b_ = Math.sin((hsv.h / 180) * Math.PI);

	let [S_max, T] = get_ST_max(a_, b_);
	let S_0 = 0.5;
	let k = 1 - S_0 / S_max;

	let L_v = 1 - (hsv.s * S_0) / (S_0 + T - T * k * hsv.s);
	let C_v = (hsv.s * T * S_0) / (S_0 + T - T * k * hsv.s);

	let L = hsv.v * L_v;
	let C = hsv.v * C_v;

	let L_vt = toe_inv(L_v);
	let C_vt = (C_v * L_vt) / L_v;

	let L_new = toe_inv(L); // * L_v/L_vt;
	C = (C * L_new) / L;
	L = L_new;

	let rgb_scale = convertOklabToLrgb({ l: L_vt, a: a_ * C_vt, b: b_ * C_vt });
	let scale_L = Math.cbrt(
		1 / Math.max(rgb_scale.r, rgb_scale.g, rgb_scale.b, 0)
	);

	L = L * scale_L;
	C = C * scale_L;

	let ret = { mode: 'oklab', l: L, a: C * a_, b: C * b_ };
	if (hsv.alpha !== undefined) {
		ret.alpha = hsv.alpha;
	}
	return ret;
}
