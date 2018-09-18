'use strict';

var test = require('tape');
var isArguments = require('./');

test('primitives', function (t) {
	t.notOk(isArguments([]), 'array is not arguments');
	t.notOk(isArguments({}), 'object is not arguments');
	t.notOk(isArguments(''), 'string is not arguments');
	t.notOk(isArguments({ length: 2 }), 'naive array-like is not arguments');
	t.end();
});

test('arguments object', function (t) {
	t.ok(isArguments(arguments), 'arguments is arguments');
	t.notOk(isArguments(Array.prototype.slice.call(arguments)), 'sliced arguments is not arguments');
	t.end();
});

test('old-style arguments object', function (t) {
	var isLegacyArguments = isArguments.isLegacyArguments || isArguments;
	var fakeOldArguments = {
		callee: function () {},
		length: 3
	};
	t.ok(isLegacyArguments(fakeOldArguments), 'old-style arguments is arguments');
	t.end();
});
