import test from 'node:test';
import assert from 'node:assert';
import {
	filterDeficiencyProt,
	filterDeficiencyDeuter,
	filterDeficiencyTrit,
	formatHex
} from '../src/index.js';

test('0 severity', t => {
	assert.equal(formatHex(filterDeficiencyProt(0)('red')), '#ff0000');
	assert.equal(formatHex(filterDeficiencyDeuter(0)('red')), '#ff0000');
	assert.equal(formatHex(filterDeficiencyTrit(0)('red')), '#ff0000');
});

test('0.55 severity', t => {
	assert.equal(formatHex(filterDeficiencyProt(0.55)('blue')), '#0012ff');
	assert.equal(formatHex(filterDeficiencyDeuter(0.55)('blue')), '#000afa');
	assert.equal(formatHex(filterDeficiencyTrit(0.55)('blue')), '#000fae');
});

test('1 severity', t => {
	assert.equal(formatHex(filterDeficiencyProt(1)('green')), '#876500');
	assert.equal(formatHex(filterDeficiencyDeuter(1)('green')), '#6e5605');
	assert.equal(formatHex(filterDeficiencyTrit(1)('green')), '#007758');
});
