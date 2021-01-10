const eqArray = require('../eqArrays');
const assertEqual = require('../assertEqual');

let result = eqArray(["1", "2", "3"], ["1", "2", 3])
  assertEqual(result, false);