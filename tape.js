var test = require('tape');
var args = process.argv;
var fancify = require(args[2]);

// var fancify = require('./metatests/fancify');

test('Fancify is fancifying my string', function (t) {
   t.deepEqual(fancify('Hello'), '~*~Hello~*~', 'wraps a string in a tapeworm');
   t.deepEqual(fancify('Hello', true), '~*~HELLO~*~');
   t.deepEqual(fancify('Hello', false, '!'), '~!~Hello~!~');
   t.end();
 });
