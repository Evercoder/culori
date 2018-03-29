export default color => {
	
	if (typeof color !== 'number') {
		return;
	}

	let num = Math.min(Math.max(0, color), 0xFFFFFFFF);

	if (num <= 0xFFF) {
		return [
			((num >> 8 & 0xF) | (num >> 4 & 0xF0)) / 255, 
			((num >> 4 & 0xF) | (num & 0xF0)) / 255, 
			((num & 0xF) | (num << 4 & 0xF0)) / 255
		];
	}
	
	if (num <= 0xFFFFFF) {
		return [
			(num >> 16 & 0xFF) / 255, 
			(num >> 8 & 0xFF) / 255, 
			(num & 0xFF) / 255
		];
	}

	if (num <= 0xFFFFFFFF) {
		return [
			(num >> 24 & 0xFF) / 255, 
			(num >> 16 & 0xFF) / 255, 
			(num >> 8 & 0xFF) / 255, 
			(num & 0xFF) / 255
		];
	}
}