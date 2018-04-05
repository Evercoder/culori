export default (count = 2) => {
	if (count < 2) {
		return count < 1 ? [] : [0.5];
	}
	let res = [];
	for (let i = 0; i < count; i++) {
		res.push(i / (count - 1));
	}
	return res;
};