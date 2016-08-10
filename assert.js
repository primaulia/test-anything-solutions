var assert = require('assert');
var args = process.argv;
var isCoolNumber = require(args[2]);

// var isCoolNumber = require('./metatests/cool');
// console.log( assert( isCoolNumber( 42 ), 'number should be 42') );

assert( isCoolNumber( 42 ), 'number should be 42' );
