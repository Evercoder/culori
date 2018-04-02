export default (fn, count = 2) => {
	if (count < 2) {
		return undefined;
	}
	let res = [];
	for (let i = 0; i < count; i++) {
		res.push(fn(i / (count - 1)));
	}
	return res;
};