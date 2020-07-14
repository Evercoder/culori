const premultiplyAlpha = {
	pre: (v, ch, c) =>
		ch !== 'alpha' && v !== undefined
			? v * (c.alpha !== undefined ? c.alpha : 1)
			: v,
	post: (v, ch, c) =>
		ch !== 'alpha' && v !== undefined
			? v / (c.alpha !== undefined ? c.alpha : 1)
			: v
};

export { premultiplyAlpha };
