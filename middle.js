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

  const middle = function(arr){
    emptyArr = [];
    if(arr.length === 1){
        return  emptyArr;
        // console.log(emptyArr);

    }else if ((arr.length % 2) !== 0){
        let arrOdd = [];
        let mid = (arr.length -1)/2;
        arrOdd.push(arr[mid]);
            return arrOdd;
        // console.log(arr[mid]);
        

    }else if ((arr.length % 2) === 0){
        let arrEven = [];
        let midOne = (arr.length/2);
        arrEven.push(arr[midOne]);
        let midTwo = (arr.length/2) -1;
        arrEven.push(arr[midTwo]);
        
        return arrEven;
        // console.log(arr[midOne], arr[midTwo])
        

    }
    
    
  }

console.log(middle([1,5,8,9,5]));
let result = middle([1,5,8,9,5,3]);
assertArrayEqual(result, [9,8]);
