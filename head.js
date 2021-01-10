// const asserEqual = function(actual, expected) {

//     if (actual === expected) {
//       console.log(`Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`Assertion Failed:  ${actual}!==${expected}`);
//     }
//   };
const assertEqual = require('./assertEqual');


const head = function(array) {
    
    arrayIndexZero = array[0];
    return arrayIndexZero;
};
    


module.exports = head;