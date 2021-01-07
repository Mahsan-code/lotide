const eqArray = function(array_One, array_two){

    return Array.isArray(array_One) && Array.isArray(array_two) &&
    array_One.length === array_two.length && array_One.every((val, index) => val ===array_two[index]);
  }

  const assertArrayEqual = function(arrayOne,arrayTwo){

    if(eqArray(arrayOne,arrayTwo)){
        console.log(`Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    }else {
        console.log(`Assertion Failed:  ${arrayOne}!==${arrayTwo}`);
      }
  }




const map = function(array, callBack){
  let arr = [];
  for (let item of array){
    arr.push(callBack(item));
  };
  return arr;
}

const words = ["ground", "control", "to", "major", "tom"];
const result1 =  map(words, word => word[0]);
console.log(result1);

assertArrayEqual(result1, [ 'g', 'c', 't', 'm', 't']);