import test from 'node:test';
import assert from 'node:assert';
import { parse } from '../src/index.js';

test('fewer values than channels', t => {
	const tests = [
		'color(srgb)',
		'color(srgb )',
		'color(srgb/)',
		'color(srgb /0.5)',
		'color(srgb 0.25)',
		'color(srgb 0.25 50%)',
		'color( srgb 25% .5 / 0.2)'
	];
	tests.forEach(test => {
		assert.equal(parse(test), undefined, test);
	});
});

test('more values than channels', t => {
	const tests = [
		'color(srgb 25% .5 75% 0.33 0.66)',
		'color(srgb 25% .5 75% 0.33 0.66 / 70% )',
		'color(srgb 25% .5 75% 0.33 / 0.7)'
	];
	tests.forEach(test => {
		assert.equal(parse(test), undefined, test);
	});
});

test('hue components', t => {
	const tests = ['color(srgb 0.5 0.5 0deg)'];
	tests.forEach(test => {
		assert.equal(parse(test), undefined, test);
	});
});

test('clamp alpha', t => {
	assert.deepEqual(
		parse('color(srgb 1.5 -0.4 0.2 / -0.5)'),
		{ mode: 'rgb', r: 1.5, g: -0.4, b: 0.2, alpha: 0 },
		'clamp alpha < 0'
	);
	assert.deepEqual(
		parse('color(srgb 1.5 -0.4 0.2 / 1.5)'),
		{ mode: 'rgb', r: 1.5, g: -0.4, b: 0.2, alpha: 1 },
		'clamp alpha > 1'
	);
});
