var test = require('tape');
var args = process.argv;
var repeat = require(args[2]);

// var repeat = require('./metatests/repeat');
//
// repeat(6, function() {
//   console.log('call');
// });


test('Repeated callback is called by n number of times based on the args', function (t) {
   t.plan(6);

   repeat(6, function() {
     t.pass('callback called');
   });
 });
