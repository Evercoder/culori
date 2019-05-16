/*
	Smootherstep easing function proposed by K. Perlin
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
export default t => t * t * t * (t * (t * 6 - 15) + 10);
