import assert from 'node:assert';
import test from 'node:test';

import { main } from '../src/cli.js';

function createMockConsole() {
	const logs = [];
	const errors = [];
	return {
		log: msg => logs.push(msg),
		error: msg => errors.push(msg),
		getLogs: () => logs,
		getErrors: () => errors
	};
}

async function run(args) {
	const consoleMock = createMockConsole();
	const exitCode = await main({
		args: ['node', 'cli.js', ...args],
		console: consoleMock
	});
	return {
		logs: consoleMock.getLogs(),
		errors: consoleMock.getErrors(),
		exitCode
	};
}

async function runsSuccessfully(args, expectedLogs) {
	const { logs, errors, exitCode } = await run(args);
	if (exitCode !== 0) {
		throw new Error(
			`Expected exit code 0 but got ${exitCode}. Errors: ${errors.join('\n')}`
		);
	}
	if (typeof expectedLogs !== 'undefined') {
		assertEquals(logs, expectedLogs);
	}
	return logs;
}

async function runsWithError(args, expectedErrors) {
	const { logs, errors, exitCode } = await run(args);
	if (exitCode === 0) {
		throw new Error(
			`Expected non-zero exit code but got ${exitCode}. Logs: ${logs.join('\n')}`
		);
	}
	if (typeof expectedErrors !== 'undefined') {
		assertEquals(errors, expectedErrors);
	}
	return errors;
}

function assertEquals(actual, expected) {
	const expectedArray = Array.isArray(expected) ? expected : [expected];
	const minLength = Math.min(actual.length, expectedArray.length);
	for (let i = 0; i < minLength; i++) {
		if (expectedArray[i] instanceof RegExp) {
			assert.match(actual[i], expectedArray[i]);
		} else {
			assert.strictEqual(actual[i], expectedArray[i]);
		}
	}
	if (actual.length !== expectedArray.length) {
		throw new Error(
			`Expected ${expectedArray.length} entries but got ${actual.length}. Actual: ${actual.join('\n')}`
		);
	}
}

test('convert', async () => {
	await runsSuccessfully(
		['convert', '#ff9933', '--to', 'rgb'],
		'rgb(255, 153, 51)'
	);
	await runsSuccessfully(['convert', '#ff9933', '--to', 'hex'], '#ff9933ff');
	await runsSuccessfully(
		['convert', '#ff9933', '--to', 'oklch'],
		/^oklch\(0\.77\d+ 0\.16\d+ 60\.\d+\)$/
	);
});

test('brighten', async () => {
	await runsSuccessfully(
		['brighten', '#ff9933', '--amount', '2'],
		'#ffff66ff'
	);
	await runsSuccessfully(
		['brighten', '#ff9933', '--amount', '0.5', '--to', 'rgb'],
		'rgb(128, 77, 26)'
	);
	const { errors, exitCode } = await run(['brighten', '#ff9933']);
	assert.strictEqual(exitCode, 1);
	assert.match(
		errors[0],
		/usage: .* brighten <color> --amount <float> \[--to <format>\]/
	);
});

test('blend', async () => {
	await runsSuccessfully(
		['blend', '#ff9933', 'rgb(128, 77, 26)'],
		'#802e05ff'
	);
	await runsSuccessfully(
		['blend', '#ff9933', 'rgb(128, 77, 26)', '--mode', 'screen'],
		'#ffb848ff'
	);
});

test('info', async () => {
	await runsSuccessfully(
		['info', '#ff9933'],
		[
			'HEX: #ff9933ff',
			'RGB: rgb(255, 153, 51)',
			'HSL: hsl(30, 100%, 60%)',
			/^OKLCH: oklch\(0\.77\d+ 0\.16\d+ 60\.\d+\)$/,
			'Luminance: 0.443',
			'Is valid: Yes'
		]
	);
});

test('luminance', async () => {
	const [raw] = await runsSuccessfully(['luminance', '#ff9933']);
	const parsed = parseFloat(raw);
	assert.ok(parsed > 0.442 && parsed < 0.444);
});

test('contrast', async () => {
	const [raw] = await runsSuccessfully(['contrast', '#ff9933', '#3399ff']);
	const parsed = parseFloat(raw);
	assert.ok(parsed > 1.37 && parsed < 1.39);
});

test('invalid color', async () => {
	await runsWithError(
		['convert', 'notacolor', '--to', 'rgb'],
		/Invalid color/
	);
});

test('unknown command', async () => {
	const expected = [
		/Unknown command/,
		/Use "node cli.js help" to see available commands./
	];
	await runsWithError(['foobar'], expected);
	await runsWithError(['foobar', '#ff9933'], expected);
});

test('version', async () => {
	await runsSuccessfully(['version'], /\d+\.\d+\.\d+/);
	await runsSuccessfully(['convert', 'foobar', '--version'], /\d+\.\d+\.\d+/);
});

test('no args', async () => {
	await runsWithError([], /usage:/);
});

test('help', async () => {
	await runsSuccessfully(['help'], /usage:/);
	await runsSuccessfully(['--help'], /usage:/);
	await runsSuccessfully(['convert', '--help'], /usage:/);
});
