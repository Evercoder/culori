/*
	Vantage-Point Tree implementation
	---------------------------------

	Reference: https://en.wikipedia.org/wiki/Vantage-point_tree

 */

import identity from './identity';

const vptree = (items, metric, accesor = identity) => {

	let values = [];
	let indexes = [];

	items.forEach((item, idx) => {
		values.push(accessor(item));
		indexes.push(idx);
	});

	return (item, n = 1, τ = Infinity) => {

	}
}