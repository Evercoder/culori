const mixin = (obj, mixin) => {
	Object.keys(mixin).forEach(function(key) {
		obj[key] = mixin[key];
	});
}

export default function(obj, ...mixins) {
	mixins.forEach(m => mixin(obj, m));
};