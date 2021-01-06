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

const without = function(source, itemToRemove){

    for(let i = 0; i < source.length; i ++){
        for (let j = 0; j < itemToRemove.length; j ++){
            if(source[i] === itemToRemove[j]){
                source.splice(i,1);
                
            }
        }
    }
    return source;
  }
  
console.log(without(["1", "2", "3"], [1, 2, "3"]));
let num = [1,8,9,5,2];
let result = without(num, [5,2]);
assertArrayEqual(result, [1,8,9]);

const str = ['h', 'g', 'r'];
without(str, ['h']);
assertArrayEqual(str, ['h', 'g', 'r']);
