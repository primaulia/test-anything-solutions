var test = require('tape');
// var feedCat = require('./metatests/purr');
var args = process.argv;
var feedCat = require( args[2] );

test('Don\'t feed the choco to le cat!', function(t) {
  t.throws(function() {
    feedCat('chocolate');
  });

  t.deepEqual( feedCat('Hello'), 'yum', 'it tastes yummy');
  t.end();
});
