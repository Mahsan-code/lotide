const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');

let result = middle([1,5,8,9,5,3]);
assertArrayEqual(result, [9,8]);