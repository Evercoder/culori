class Color {

	constructor(c) {
		this._color = c;
	}

	to(format) {}

	nice(format) {}

	css(format) {}

	serialize() {
		return { ...this._color };
	}

	toString() {
		return this.css();
	}
}

export default Color;