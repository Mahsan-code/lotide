const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };
  const eqArray = function(arrayOne, arrayTwo){

    return Array.isArray(arrayOne) && Array.isArray(arrayTwo) &&
    arrayOne.length === arrayTwo.length && arrayOne.every((val, index) => val ===arrayTwo[index]);
  }

  const eqObject = function(object1, object2){

    let obj1Array = Object.keys(object1);
    let obj2Array = Object.keys(object2);
    if (obj1Array.length !== obj2Array.length){
        return false;
    }
     for (let key of obj1Array){
    
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
            
            let result = eqArray(object1[key], object2[key]);
            
            if(result !== true){
                return false;
            }

        }else if(obj1Array[key] !== obj2Array[key]){
            return false;
        }
     }
    return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
asserEqual(eqObject(ab,abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
asserEqual(eqObject(cd,cd2), false);

