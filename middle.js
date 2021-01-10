// const eqArray = require('./eqArrays');
const assertArrayEqual = require('./assertArraysEqual');

  const middle = function(arr){
    emptyArr = [];
    if(arr.length === 1){
        return  emptyArr;
        

    }else if ((arr.length % 2) !== 0){
        let arrOdd = [];
        let mid = (arr.length -1)/2;
        arrOdd.push(arr[mid]);
            return arrOdd;
        
        

    }else if ((arr.length % 2) === 0){
        let arrEven = [];
        let midOne = (arr.length/2);
        arrEven.push(arr[midOne]);
        let midTwo = (arr.length/2) -1;
        arrEven.push(arr[midTwo]);
        
        return arrEven;
        
        

    }
    
    
  }


let result = middle([1,5,8,9,5,3]);
assertArrayEqual(result, [9,8]);

module.exports = middle;
