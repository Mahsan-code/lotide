const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };

  const countLetters = function(str){

    results = {};
    for (let letter of str){
        if (results[letter] === undefined){
            results[letter] = 1;
            
        }else{
            results[letter]++;
        }
    }
    return results;

  }

  console.log(countLetters("lighthouse in the house"));

