const fixup = value => Math.round(Math.max(0, Math.min(value, 1)) * 255);

export default fixup;
