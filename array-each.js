/**
 * Adds an 'each' method to Array prototype.
 * The idea being that forEach is nice, but it's lame
 * to have the array reference passed as an argument
 * and also not being able to break out. This solves both problems
 *
 * @method Array.prototype.each
 * @param {function(this:Array [value, index, exit])} method Runs on all keys
 * @return {Array} Self reference for chaining
 */
Array.prototype.each = function(method) {
	var _handBreak = false;

	function _break() { _handBreak = true; }

	for (var i = this.length - 1; i >= 0; i--) {
		if (_handBreak) return this;
		method.call(this, this[i], i, _break); 
	}
	return this;
};