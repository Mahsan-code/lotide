const asserEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed:  ${actual}!==${expected}`);
    }
  };

  const countOnly = function(allItem, itemsToCount){
    const results = {}
    let count =0;

        for (const item of allItem){
            if(itemsToCount[item] === true){
                if(results[item] === undefined){
                    results[item] = 1 ;
                }else{
                    results[item] += 1 ;
                }
            }  
            
        }

    


    
    console.log(results);
    return results;

  }

  const firstNames = [

    "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
  ];
  
  const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

  asserEqual(result1["Jason"],1);
  asserEqual(result1["Karima"], undefined);
  asserEqual(result1["Fang"], 2);
  asserEqual(result1["Agouhanna"],undefined);