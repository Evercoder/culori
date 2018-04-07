const M = [
	-0.14861, 1.78277,
	-0.29227, -0.90649,
	1.97294, 0
];

const degToRad = Math.PI / 180;

export default (startcolor = 0.5, turns = -1.5, chroma = 1, gamma = 1) => 
	t => {

		let res = {
			mode: 'rgb'
		};

		const l = Math.pow(t, gamma);

		const theta = 360 * (startcolor / 3 + turns * t) * degToRad;
		const amp = chroma / 2 * t * (1 - t);

		let cosh = Math.cos(theta);
		let sinh = Math.sin(theta);

		res.r = l + amp * (M[0] * cosh + M[1] * sinh);
		res.g = l + amp * (M[2] * cosh + M[3] * sinh);
		res.b = l + amp * (M[4] * cosh + M[5] * sinh);

		return res;
	};