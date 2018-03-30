import { IS_CULORI, IS_RGB, ALPHA_IMPLIED } from '../api/flags';

export default (color, flags = 0) => {
	
	if (typeof color !== 'number') return;

	let num = Math.min(Math.max(0, color), 0xFFFFFFFF);

	// hex3: #c93 -> #cc9933
	if (num <= 0xFFF) {
		return {
			flags: IS_CULORI | IS_RGB | ALPHA_IMPLIED | flags,
			r: ((num >> 8 & 0xF) | (num >> 4 & 0xF0)) / 255, 
			g: ((num >> 4 & 0xF) | (num & 0xF0)) / 255, 
			b: ((num & 0xF) | (num << 4 & 0xF0)) / 255
		};
	}

	// hex4: #c931 -> #cc993311
	if (num <= 0xFFFF) {
		return {
			flags: IS_CULORI | IS_RGB | flags,
			r: ((num >> 12 & 0xF) | (num >> 8 & 0xF0)) / 255, 
			g: ((num >> 8 & 0xF) | (num >> 4 & 0xF0)) / 255, 
			b: ((num >> 4 & 0xF) | (num & 0xF0)) / 255, 
			a: ((num & 0xF) | (num << 4 & 0xF0)) / 255
		};
	}
	
	// hex6: #f0f1f2
	if (num <= 0xFFFFFF) {
		return {
			flags: IS_CULORI | IS_RGB | ALPHA_IMPLIED | flags,
			r: (num >> 16 & 0xFF) / 255, 
			g: (num >> 8 & 0xFF) / 255, 
			b: (num & 0xFF) / 255
		};
	}

	// hex8: #f0f1f2ff
	if (num <= 0xFFFFFFFF) {
		return {
			flags: IS_CULORI | IS_RGB | flags,
			r: (num >> 24 & 0xFF) / 255, 
			g: (num >> 16 & 0xFF) / 255, 
			b: (num >> 8 & 0xFF) / 255, 
			a: (num & 0xFF) / 255
		};
	}
}