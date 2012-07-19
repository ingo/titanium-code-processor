/* 
 * Copyright (c) 2012 by Appcelerator, Inc. All Rights Reserved.
 * Please see the LICENSE file for information about licensing.
 */

var path = require("path"),
	Base = require(path.join(require.main.exports.libPath, "Base")),
	assert = require("assert");

module.exports = [{
		name: "Data",
		testFunction: function() {
			return Base.isAccessorDescriptor(new Base.DataPropertyDescriptor());
		},
		props: {
			expectedReturnValue: false
		}
	},{
		name: "Accessor",
		testFunction: function() {
			return Base.isAccessorDescriptor(new Base.AccessorPropertyDescriptor());
		},
		props: {
			expectedReturnValue: true
		}
	},{
		name: "Generic",
		testFunction: function() {
			return Base.isAccessorDescriptor({
				enumerable: false,
				configurable: false
			});
		},
		props: {
			expectedReturnValue: false
		}
	},{
		name: "Undefined",
		testFunction: function() {
			return Base.isAccessorDescriptor();
		},
		props: {
			expectedReturnValue: false
		}
	}
];