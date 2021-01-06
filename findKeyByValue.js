const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };

  const findByKeyValue = function (myObject, value){


    for(let key in myObject){
        if(myObject[key] === value){
            return key;
        } 
    }       
        
    return "key not found"
        

  }

  const bestTVShowsByGenre = {

    sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
  }
console.log(findByKeyValue(bestTVShowsByGenre, "The Wire"));
asserEqual(findByKeyValue(bestTVShowsByGenre, "The Wire"), "drama");