export default arr =>
	arr.map((val, idx, arr) => {
		return val === undefined && arr[idx + 1] !== undefined ? 1 : val;
	});
