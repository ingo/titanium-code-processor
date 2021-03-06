/**
 * <p>Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Please see the LICENSE file for information about licensing.</p>
 *
 * Definition for the regexp type
 *
 * @module base/types/regexp
 */
/*global
util,
ObjectType,
prototypes,
throwNativeException,
NumberType,
BooleanType,
StringType
*/

/*****************************************
 *
 * RegExp Type Class
 *
 *****************************************/

// ******** RegExp Type Class ********

/**
 * @classdesc A regexp type.
 *
 * @constructor module:base/types/regexp.RegExpType
 * @extends module:base.ObjectType
 * @param {string} pattern The regex pattern
 * @Param {string} flags The regex flags
 * @param {string} [className] The name of the class, such as 'String' or 'Object'
 * @see ECMA-262 Spec Chapters 11.1.4 and 15.4
 */
exports.RegExpType = RegExpType;
function RegExpType(pattern, flags, className) {

	var proto;

	ObjectType.call(this, className || 'RegExp');

	Object.defineProperty(this, 'objectPrototype', {
		get: function () {
			return proto || prototypes.RegExp;
		},
		set: function (value) {
			proto = value;
		},
		configurable: true
	});

	if (typeof pattern != 'undefined') {
		if (Object.prototype.toString.apply(pattern).indexOf('RegExp') !== -1) { // For some reason, pattern instanceof RegExp doesn't work
			this.value = pattern;
			this._pattern = pattern.source;
			this._flags = (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '');
		} else {
			try {
				this.value = new RegExp(pattern, flags);
				this._pattern = pattern;
				this._flags = flags;
			} catch(e) {
				throwNativeException('SyntaxError', 'Regular expression pattern is undefined');
			}
		}
		this._refreshPropertiesFromRegExp();
	}
}
util.inherits(RegExpType, ObjectType);

/**
 * @private
 */
RegExpType.prototype._refreshPropertiesFromRegExp = function _refreshPropertiesFromRegExp() {

	var value = this.value;

	this.put('lastIndex', new NumberType(value.lastIndex), false, true);
	this.put('ignoreCase', new BooleanType(value.ignoreCase), false, true);
	this.put('global', new BooleanType(value.global), false, true);
	this.put('multiline', new BooleanType(value.multiline), false, true);
	this.put('source', new StringType(value.source), false, true);
};

/**
 * @private
 */
RegExpType.prototype._refreshRegExpFromProperties = function _refreshRegExpFromProperties() {
	this.value.lastIndex = this.get('lastIndex');
};