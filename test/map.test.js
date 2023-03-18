import tape from 'tape';
import {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma,
	formatHex,
	formatHex8
} from '../src/index.js';

tape('mapping alpha', t => {
	let multiply = mapper(mapAlphaMultiply);
	let divide = mapper(mapAlphaDivide);

	t.equal(formatHex8(multiply('#ff00cc80')), '#80006680');
	t.equal(formatHex8(divide(multiply('#ff00cc80'))), '#ff00cc80');
	t.end();
});

tape('linear transfer function', t => {
	let brighten = mapper(mapTransferLinear(2));
	t.equal(formatHex(brighten('#cc0033')), '#ff0066');
	t.end();
});

tape('gamma transfer function', t => {
	let brighten = mapper(mapTransferGamma(2.2));
	t.equal(formatHex(brighten('#cc0033')), '#ff0070');
	t.end();
});

tape('when mode is null and color is rgb string', t => {
	let increaser = mapper(v => v + 0.1, null);

	// might be incorrect
	t.throws(() => {
		increaser('#cc0033');
	}, "Cannot read properties of undefined (reading 'channels')");
	t.end();
});

tape('when mode is null and color is rgb', t => {
	let increaser = mapper(v => v + 0.1, null);
	const res = increaser({ mode: 'rgb', r: 0.8, g: 0, b: 0.2 });

	// might be incorrect
	t.equal(res.mode, null);
	t.end();
});

tape('when mode is null and preserve_mode is true', t => {
	let increaser = mapper(v => v + 1, null, true);

	// might be incorrect
	t.throws(
		() => {
			const res = increaser({ mode: 'rgb', r: 0.8, g: 0, b: 0.2 });
			console.log(res);
		},
		{ message: "Cannot read properties of undefined (reading 'rgb')" }
	);
	t.end();
});

tape('when mode is undefined and preserve_mode is true', t => {
	let decreaseMapper = mapper(v => v - 0.1, undefined, true);
	const res = decreaseMapper('#cc0033');
	t.equal(res.mode, 'rgb');
	t.end();
});

tape('when mode is hsl and preserve_mode is true', t => {
	let increaser = mapper(v => v + 0.1, 'hsl', true);
	const res = increaser('#cc0033');
	t.equal(res.mode, 'rgb');
	t.end();
});

tape('when mode is hsl and preserve_mode is false', t => {
	let increaser = mapper(v => v + 0.1, 'hsl', false);
	const res = increaser('#cc0033');
	t.equal(res.mode, 'hsl');
	t.end();
});

tape('when mode is oklch and preserve_mode is false', t => {
	let increaser = mapper(v => v + 0.1, 'oklch', false);
	const res = increaser('#cc0033');
	t.equal(res.mode, 'oklch');
	t.end();
});

tape(
	`when input color is oklch('color(--oklch 30 0.5 1 / 0.25)') and when mode is hsl and preserve_mode is false`,
	t => {
		let increaser = mapper(v => v + 0.1, 'hsl', false);
		const res = increaser({
			mode: 'oklch',
			alpha: 0.25,
			l: 30,
			c: 0.5,
			h: 1
		});
		t.equal(res.mode, 'hsl');
		t.end();
	}
);

tape(
	`when input color is oklch('color(--oklch 30 0.5 1 / 0.25)') and when mode is hsl and preserve_mode is true`,
	t => {
		let increaser = mapper(v => v + 0.1, 'hsl', true);
		const res = increaser({
			mode: 'oklch',
			alpha: 0.25,
			l: 30,
			c: 0.5,
			h: 1
		});
		t.equal(res.mode, 'oklch');
		t.end();
	}
);
