const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };



const head = function(array) {
    
    arrayIndexZero = array[0];
    return arrayIndexZero;
};
    
const result = head([4,5,9,3,6]);
asserEqual(result, 4);
