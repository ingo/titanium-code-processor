var path = require("path"),
	Base = require(path.join(require.main.exports.libPath, "Base")),
	assert = require("assert");

var numResult = new Base.TypeNumber(),
	temp;

module.exports = [{
		name: "Undefined",
		testFunction: function() {
			temp = Base.toNumber(new Base.TypeUndefined());
		},
		props: {
			expectedReturnValue: undefined, // Can't use return type since NaN === NaN is false
			postEvaluation: function() {
				return isNaN(temp.value);
			}
		}
	},{
		name: "Null",
		testFunction: function() {
			numResult.value = 0;
			return Base.toNumber(new Base.TypeNull());
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "Boolean, false",
		testFunction: function() {
			var bool = new Base.TypeBoolean();
			bool.value = false;
			numResult.value = 0;
			return Base.toNumber(bool);
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "Boolean, true",
		testFunction: function() {
			var bool = new Base.TypeBoolean();
			bool.value = true;
			numResult.value = 1;
			return Base.toNumber(bool);
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "Number, 0",
		testFunction: function() {
			var num = new Base.TypeNumber();
			num.value = 0;
			numResult.value = 0;
			return Base.toNumber(num);
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "Number, NaN",
		testFunction: function() {
			var num = new Base.TypeNumber();
			num.value = NaN;
			numResult.value = NaN;
			temp = Base.toNumber(num);
		},
		props: {
			expectedReturnValue: undefined, // Can't use return type since NaN === NaN is false
			postEvaluation: function() {
				return isNaN(temp.value);
			}
		}
	},{
		name: "Number, 100.5e-20",
		testFunction: function() {
			var num = new Base.TypeNumber();
			num.value = 1.005e-20;
			numResult.value = 1.005e-20;
			return Base.toNumber(num);
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "String, empty",
		testFunction: function() {
			var	str = new Base.TypeString();
			str.value = "";
			numResult.value = 0;
			return Base.toNumber(str);
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "String, non-empty",
		testFunction: function() {
			var	str = new Base.TypeString();
			str.value = " 100.45";
			numResult.value = 100.45;
			return Base.toNumber(str);
		},
		props: {
			expectedReturnValue: numResult
		}
	},{
		name: "Object",
		testFunction: function() {
			console.log("IMPLEMENT ME");
		},
		props: {
			expectedReturnValue: numResult
		}
	}
];