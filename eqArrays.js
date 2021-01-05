const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };

  const eqArray = function(arrayOne, arrayTwo){

    return Array.isArray(arrayOne) && Array.isArray(arrayTwo) &&
    arrayOne.length === arrayTwo.length && arrayOne.every((val, index) => val ===arrayTwo[index]);
  }

  let result = eqArray(["1", "2", "3"], ["1", "2", 3])
  asserEqual(result, false);