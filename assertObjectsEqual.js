const eqObject = function(object1, expected){

    let obj1Array = Object.keys(object1);
    let obj2Array = Object.keys(expected);
    if (obj1Array.length !== obj2Array.length){
        return false;
    }
     for (let key of obj1Array){
    
        if (Array.isArray(object1[key]) && Array.isArray(expected[key])){
            
            let result = eqArray(object1[key], expected[key]);
            
            if(result !== true){
                return false;
            }

        }else if(obj1Array[key] !== obj2Array[key]){
            return false;
        }
     }
    return true;
}

const assertObjectsEqual = function(actual, expected) {
    
    const inspect = require('util').inspect;

    if(eqObject(actual,expected)){
        console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }else {
        console.log(`Assertion Failed:  ${inspect(actual)}!==${inspect(expected)}`);
      }
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);