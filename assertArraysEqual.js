const eqArray = require('./eqArrays');

  const assertArrayEqual = function(arrayOne,arrayTwo){

    if(eqArray(arrayOne,arrayTwo)){
        console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    }else {
        console.log(`Assertion Failed:  ${arrayOne}!==${arrayTwo}`);
      }
  }

  assertArrayEqual([4,7,8],[4,7,9]);

  module.exports = assertArrayEqual;