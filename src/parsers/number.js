export default (color, len) => {
	
	if (typeof color !== 'number') return;

	// hex3: #c93 -> #cc9933
	if (len === 3) {
		return {
			mode: 'rgb',
			r: ((color >> 8 & 0xF) | (color >> 4 & 0xF0)) / 255, 
			g: ((color >> 4 & 0xF) | (color & 0xF0)) / 255, 
			b: ((color & 0xF) | (color << 4 & 0xF0)) / 255
		};
	}

	// hex4: #c931 -> #cc993311
	if (len === 4) {
		return {
			mode: 'rgb',
			r: ((color >> 12 & 0xF) | (color >> 8 & 0xF0)) / 255, 
			g: ((color >> 8 & 0xF) | (color >> 4 & 0xF0)) / 255, 
			b: ((color >> 4 & 0xF) | (color & 0xF0)) / 255, 
			alpha: ((color & 0xF) | (color << 4 & 0xF0)) / 255
		};
	}
	
	// hex6: #f0f1f2
	if (len === 6) {
		return {
			mode: 'rgb',
			r: (color >> 16 & 0xFF) / 255, 
			g: (color >> 8 & 0xFF) / 255, 
			b: (color & 0xFF) / 255
		};
	}

	// hex8: #f0f1f2ff
	if (len === 8) {
		return {
			mode: 'rgb',
			r: (color >> 24 & 0xFF) / 255, 
			g: (color >> 16 & 0xFF) / 255, 
			b: (color >> 8 & 0xFF) / 255, 
			alpha: (color & 0xFF) / 255
		};
	}
}