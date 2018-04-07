export default (count = 2, gamma = 1) => {
	if (count < 2) {
		return count < 1 ? [] : [Math.pow(0.5, gamma)];
	}
	let res = [];
	for (let i = 0; i < count; i++) {
		res.push(Math.pow(i / (count - 1), gamma));
	}
	return res;
};