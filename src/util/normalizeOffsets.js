/*
	Note: this method does not make a defensive copy of the array.
	Instead, it adjusts the offsets in place.
 */
export default arr => {
	// let arr = offsets.slice();
	if (arr[0] === undefined) arr[0] = 0;
	if (arr[arr.length - 1] === undefined) arr[arr.length - 1] = 1;
	let i = 1,
		j,
		start,
		start_offset,
		increment;
	while (i < arr.length) {
		if (arr[i] === undefined) {
			start = i;
			start_offset = arr[i - 1];
			j = i;
			while (arr[j] === undefined) j++;
			increment = (arr[j] - start_offset) / (j - i + 1);
			while (i < j) {
				arr[i] = start_offset + (i - start + 1) * increment;
				i++;
			}
		} else if (arr[i] < arr[i - 1]) {
			arr[i] = arr[i - 1];
		}
		i++;
	}
	// return arr;
};
