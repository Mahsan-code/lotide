const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };

 const findKey = function (myObject, callback){

    for(let key in myObject){
       
        if(callback(myObject[key])){
            return key;
        }

    }
    return "not found";


 } 



  let result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3)
  asserEqual(result , 'Akaleri');