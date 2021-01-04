const asserEqual = function(actual, expected) {
    let tailArray = actual.slice(1); 
    
    if (actual.length === tailArray.length) {
      console.log(`Assertion Failed: length ${actual} and ${tailArray} shoudnt be equal`);
    } else {
      console.log(`Assertion Passed:  length ${actual}!== length${expected}`);
    }
  };
  
   asserEqual([1,6,8,9] , [6,8,9]);
