export default color => {
	
	if (typeof color !== 'number') {
		return;
	}

	let num = Math.min(Math.max(0, color), 0xFFFFFFFF);

	// hex3: #c93 -> #cc9933
	if (num <= 0xFFF) {
		return [
			((num >> 8 & 0xF) | (num >> 4 & 0xF0)) / 255, 
			((num >> 4 & 0xF) | (num & 0xF0)) / 255, 
			((num & 0xF) | (num << 4 & 0xF0)) / 255
		];
	}

	// hex4: #c931 -> #cc993311
	if (num <= 0xFFFF) {

	}
	
	// hex6: #f0f1f2
	if (num <= 0xFFFFFF) {
		return [
			(num >> 16 & 0xFF) / 255, 
			(num >> 8 & 0xFF) / 255, 
			(num & 0xFF) / 255
		];
	}

	// hex8: #f0f1f2ff
	if (num <= 0xFFFFFFFF) {
		return [
			(num >> 24 & 0xFF) / 255, 
			(num >> 16 & 0xFF) / 255, 
			(num >> 8 & 0xFF) / 255, 
			(num & 0xFF) / 255
		];
	}
}