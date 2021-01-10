const assertEqual = require('./assertEqual');

  const eqArray = function(arrayOne, arrayTwo){

    return Array.isArray(arrayOne) && Array.isArray(arrayTwo) &&
    arrayOne.length === arrayTwo.length && arrayOne.every((val, index) => val ===arrayTwo[index]);
  }

  

  module.exports = eqArray;