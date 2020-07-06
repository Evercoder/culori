import gamma from './easing/gamma';

export default (n = 2, γ = 1) => {
	if (n < 2) {
		return n < 1 ? [] : [gamma(0.5, γ)];
	}
	let res = [];
	for (let i = 0; i < n; i++) {
		res.push(gamma(i / (n - 1), γ));
	}
	return res;
};
