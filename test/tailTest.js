const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail([5,9,7,6,3]);
assertEqual(result, [9,7,6,3]);
assertEqual(result.length, 5);