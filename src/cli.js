#!/usr/bin/env node
import * as cul from './index.js';

const VERSION = '1.0.0';

/**
 * This is all the modes, but also 'hex', because 'hex' and 'rgb' are
 * both parsed into 'rgb' internally.
 * @typedef {'hex' | 'rgb' | 'hsl' | 'lab' | 'lch' | 'oklab' | 'oklch' | 'xyz' | 'xyy' | 'hsv' | 'hcg' | 'hsi' | 'hcy' | 'cmyk'} Format
 */

/**
 * Formats into a string.
 *
 * @param {Object} color - The color object to format.
 * @param {Format} [format] - The format mode. If not provided, uses the color's mode.
 * @returns {string} The formatted color string.
 */
function format(color, format) {
	if (format === undefined) {
		format = color.mode;
	}
	switch (format) {
		case 'hex':
			return cul.formatHex8(color);
		case 'rgb':
			return cul.formatRgb(color);
		case 'hsl':
			return cul.formatHsl(color);
		default:
			const converter = cul.converter(format);
			const converted = converter(color);
			return cul.formatCss(converted);
	}
}

function parseWithFormat(colorStr) {
	const color = cul.parse(colorStr);
	let format = color ? color.mode : null;
	if (format === 'rgb' && colorStr.includes('#')) {
		format = 'hex';
	}
	return { color, format };
}

export async function main({
	args: rawArgs = process.argv,
	console: con = console
} = {}) {
	const binString = rawArgs.slice(0, 2).join(' ');
	const args = rawArgs.slice(2);
	const HELP = `
usage: ${binString} <command> [options]
Commands:
  convert <color> --to <format>     Convert color to a different format
  brighten <color>                  Adjust brightness of a color using CSS brightness() filter
    --amount <float>                An amount of 1 leaves the color unchanged.
    [--to <format>]                 Smaller values darken the color (with 0 being fully black), while larger values brighten it.
  blend <color1> <color2>           Blend two colors
    [--mode <mode='multiply'>]
    [--to <format>]
  info <color>                      Show info about color
  luminance <color>                 Show luminance based on WCAG
  contrast <color1> <color2>        Show contrast ratio based on WCAG
  help                              Show help
  version                           Show version

Supported formats: hex, rgb, hsl, lab, lch, oklch, oklab, etc.
Supported blend modes: multiply, screen, overlay, etc.
`.trim();

	if (args.length === 0) {
		con.error(HELP);
		return 1;
	}
	if (args[0] === 'help' || args.includes('--help')) {
		con.log(HELP);
		return 0;
	}
	if (args[0] === 'version' || args.includes('--version')) {
		con.log(VERSION);
		return 0;
	}

	const cmd = args[0];
	const VALID_COMMANDS = [
		'convert',
		'brighten',
		'blend',
		'info',
		'luminance',
		'contrast'
	];
	if (!VALID_COMMANDS.includes(cmd)) {
		con.error('Unknown command:', cmd);
		con.error(`Use "${binString} help" to see available commands.`);
		return 1;
	}

	const inputColor = args[1];
	if (!inputColor) {
		con.error('No color input provided.');
		return 1;
	}
	const { color, format: inputFormat } = parseWithFormat(inputColor);
	if (!color) {
		con.error('Invalid color input.');
		return 1;
	}

	const NO_VALUE = Symbol('no value');
	function getOption(optionName, defaultValue = NO_VALUE) {
		const idx = args.indexOf(optionName);
		if (idx === -1) {
			return defaultValue;
		}
		return args[idx + 1];
	}

	const to = getOption('--to');
	const outFormat = to !== NO_VALUE ? to : inputFormat;

	if (cmd === 'convert') {
		if (to === NO_VALUE) {
			con.error(`usage: ${binString} convert <color> --to <format>`);
			return 1;
		}
		con.log(format(color, outFormat));
		return 0;
	}
	if (cmd === 'brighten') {
		const amountString = getOption('--amount');
		if (amountString === NO_VALUE) {
			con.error(
				`usage: ${binString} brighten <color> --amount <float> [--to <format>]`
			);
			return 1;
		}
		const amount = parseFloat(amountString);
		const filter = cul.filterBrightness(amount, 'rgb');
		con.log(format(filter(color), outFormat));
		return 0;
	}
	if (cmd === 'blend') {
		const color2 = args[2] || '';
		const mode = getOption('--mode', 'multiply');
		const c2 = cul.parse(color2);
		if (!c2) {
			con.error('Invalid second color for blend.');
			return 1;
		}
		con.log(format(cul.blend([color, c2], mode), outFormat));
		return 0;
	}
	if (cmd === 'info') {
		con.log(`HEX: ${format(color, 'hex')}`);
		con.log(`RGB: ${format(color, 'rgb')}`);
		con.log(`HSL: ${format(color, 'hsl')}`);
		con.log(`OKLCH: ${format(color, 'oklch')}`);
		con.log(`Luminance: ${cul.wcagLuminance(color).toFixed(3)}`);
		con.log(`Is valid: Yes`);
		return 0;
	}
	if (cmd === 'luminance') {
		con.log(cul.wcagLuminance(color));
		return 0;
	}
	if (cmd === 'contrast') {
		const color2 = args[2] || '';
		const c2 = cul.parse(color2);
		if (!c2) {
			con.error('Invalid second color for contrast.');
			return 1;
		}
		con.log(cul.wcagContrast(color, c2));
		return 0;
	}
	con.error('Unknown command:', cmd);
	con.error(`Use "${binString} help" to see available commands.`);
	return 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
	try {
		const exitCode = await main();
		process.exit(exitCode || 0);
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
}
