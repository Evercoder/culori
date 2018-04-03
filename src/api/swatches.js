export default (fn, count = 2) => {
	if (count < 2) {
		return count < 1 ? [fn(0), fn(1)] : [fn(0.5)];
	}
	let res = [];
	for (let i = 0; i < count; i++) {
		res.push(fn(i / (count - 1)));
	}
	return res;
	
};