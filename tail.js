const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };

  const tail = function(array){
      return array.slice(1);
  }

const result = tail([5,9,7,6,3]);
asserEqual(result, [9,7,6,3]);
asserEqual(result.length, 5);

