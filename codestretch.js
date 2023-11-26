// we can use an if else statement here once again, but we need to define a few variables first
function oddEvens(arr){
    const evens = [];
    const odds = [];
      const obj = {
        evens: evens,
        odds: odds
     };
    for (let i =0; i < arr.length; i++){
    console.log(i);
      if (arr[i] % 2 === 0){
         evens.push(arr[i]);
            }
      else {
         odds.push(arr[i]);
        }
    }
      return obj;
    }
    
    //function createObject
    
    
    
    
    console.log(oddEvens([1, 3, 2]));//{ odds: [1, 3], evens: [2]}
    
    //we are returning an object not an array
    //it TAKES the array but returns an object
    