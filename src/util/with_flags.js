// Object.defineProperty(obj, 'flags', {
// 	value: flags,
// 	enumerable: false
// });

export default (obj, flags) => (obj.flags = flags, obj);
