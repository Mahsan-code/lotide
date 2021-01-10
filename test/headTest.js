const head = require('../head');
const assertEqual = require('../assertEqual');

const result = head([4,5,9,3,6]);
assertEqual(result, 4);