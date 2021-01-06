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



const letterPosition = function(sentence){

    const results = {};
    

    for (let i = 0 ; i < sentence.length; i++){
        let arr = [];
        let indexOfLetter = i;
        arr.push(indexOfLetter);
        console.log(arr);
        if(results[sentence[i]]){  //if 'h' already exist in the the object or not

            results[sentence[i]].push(indexOfLetter);
        }else{
            results[sentence[i]] = arr;
        }
        
        
    }
    return results;
}

assertArrayEqual(letterPosition("hello world").l , [2,3,9]);
