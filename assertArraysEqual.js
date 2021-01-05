const eqArray = function(array_One, array_two){

    return Array.isArray(array_One) && Array.isArray(array_two) &&
    array_One.length === array_two.length && array_One.every((val, index) => val ===array_two[index]);
  }

  const assertArrayEqual = function(arrayOne,arrayTwo){

    if(eqArray(arrayOne,arrayTwo)){
        console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    }else {
        console.log(`Assertion Failed:  ${arrayOne}!==${arrayTwo}`);
      }
  }

  assertArrayEqual([4,7,8],[4,7,9]);