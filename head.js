const asserEqual = function(array, firstElement) {
    
    arrayIndexZero =array[0];

    

    if (arrayIndexZero === firstElement) {
      console.log(`Assertion Passed: ${arrayIndexZero } === ${firstElement}`);
    } else {
      console.log(`Assertion Failed:  ${arrayIndexZero} !== ${firstElement}`);
    }
  };
  
  asserEqual([4,5,8], 4);
  asserEqual(['a','e','g'], 'a');