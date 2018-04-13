import { differenceEuclidean } from './difference';

// selects the vantage point
// currently does so randomly, but this could be optimized
const select = colors => {
	return colors[Math.floor(Math.random() * (colors.length)))];
}

// currently pretty inefficient
const median = (color, colors, metric) => {
	return colors.map(c => metric(c, color)).sort()[Math.floor(colors.length/2)];
}

const vptree = (colors, metric) => {
	
	let color = select(colors);
	let dist = median(color, colors, metric);

	return {
		color: color,
		dist: dist,
		left: vptree(colors.filter(c => c !== color && metric(c, color) < dist), metric),
		right: vptree(colors.filter(c => c !== color && metric(c, color) >= dist), metric)
	};
}

export default (colors, metric = differenceEuclidean()) => {

	let tree = vptree(colors, metric);

	return (color, n = 1, τ = Infinity) => {
		let dist = metric(color, tree.color);
		let best_match;
		if (dist < τ) {
			τ = dist;
			best_match = color;
		}
	}
}