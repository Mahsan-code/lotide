const asserEqual = function(actual, expected) {

  if (actual === expected) {
    console.log('Assertion Passed: %s === %s', actual,expected);
  } else {
    console.log('Assertion Failed: %s !== %s ', actual, expected);
  }
};

asserEqual('Lighthouse Labs' , 'Lighthouse Labs');
asserEqual(20,1);