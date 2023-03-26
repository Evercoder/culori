const OKLAB_TO_LMS = [
	[0.99999999845051981432, 0.39633779217376785678, 0.21580375806075880339],
	[1.0000000088817607767, -0.1055613423236563494, -0.063854174771705903402],
	[1.0000000546724109177, -0.089484182094965759684, -1.2914855378640917399]
];

const LMS_TO_XYZ_D65 = [
	[1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
	[-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
	[-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
];

const XYZ_D65_TO_LRGB = [
	[3.2409699419045226, -1.537383177570094, -0.4986107602930034],
	[-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
	[0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];

const LMS_TO_LRGB = multiplyMatrices(XYZ_D65_TO_LRGB, LMS_TO_XYZ_D65);

function multiplyMatrices(a, b) {
	let res = [[], [], []];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			res[i][j] =
				a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j];
		}
	}
	return res;
}

function multiplyMatrixWithVector(m, v) {
	return [
		m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
		m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
		m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2]
	];
}

function multiplyComponentWise(arr1, arr2) {
	return arr1.map((it, i) => it * arr2[i]);
}

function multiplyVectors(arr1, arr2) {
	return arr1.reduce((acc, curr, i) => {
		return acc + curr * arr2[i];
	}, 0);
}

export function GamutMapNewton(original) {
	const zero_a_b = [0, original[1], original[2]];
	let alpha = 1;
	let res_oklab = original.slice();
	let res_rgb = multiplyMatrixWithVector(
		LMS_TO_LRGB,
		multiplyMatrixWithVector(OKLAB_TO_LMS, res_oklab).map(it => it ** 3)
	);
	for (let comp = 0; comp < 3; comp++) {
		if (res_rgb[comp] >= 0 && res_rgb[comp] <= 1) continue;
		let target = res_rgb[comp] > 1 ? 1 : 0;
		for (let iter = 0; iter < 6; iter++) {
			let residual =
				multiplyVectors(
					LMS_TO_LRGB[comp],
					multiplyMatrixWithVector(OKLAB_TO_LMS, res_oklab).map(
						it => it ** 3
					)
				) - target;
			if (Math.abs(residual) < 1e-15) break;
			let gradient = multiplyVectors(
				LMS_TO_LRGB[comp],
				multiplyComponentWise(
					multiplyMatrixWithVector(OKLAB_TO_LMS, res_oklab).map(
						it => 3 * it ** 2
					),
					multiplyMatrixWithVector(OKLAB_TO_LMS, zero_a_b)
				)
			);
			alpha -= residual / gradient;
			res_oklab[1] = alpha * original[1];
			res_oklab[2] = alpha * original[2];
		}
		res_rgb = multiplyMatrixWithVector(
			LMS_TO_LRGB,
			multiplyMatrixWithVector(OKLAB_TO_LMS, res_oklab).map(it => it ** 3)
		);
	}
	return [res_oklab, res_rgb];
}
