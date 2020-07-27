function sumOfDivided(s) {
    //Setup a deep copy of the orginal array for the orginal negative values
    let c = Array.from(s);
    //Swap out all the negative numbers for positives
    s = s.map(x => Math.abs(x))
    //Setup a few temp arrays I will be using
    let a = [];
    let b = [];
    //And the array for the return
    let result = [];
  
    //This loop will check all elements in the ABS version of the array for primes
    for (let x in s){
    //Bascially 'i' is going to be the test to see if its a prime factor of the element
    //starting at 2 of course
      for (let i = 2; i <= s[x]; i++){
        //The fucntion below will return a prime and if that prime is divisable by the element
        //It will push it into the first temp array and also reduce the value of the array
        while (is_prime(i) && s[x] % i === 0) {
          if (!a.includes(i)) a.push(i);
          s[x] /= i;
        }
      }
    }
    //We sort the array 
    a.sort((a,b) => a-b)
    // Temp array 'a' would look like [2, 3, 7, 17]
    //Now that we have an array of valid prime factors we check to see if each prime factor is 
    //divisable by one of the elements in the ABS array
    for(let x in a){
      for(let z in c){
        //If one of the prime factors is divisable by one of the ABS elements push the  
        //CORRESPONDING element from the ORIGINAL array into by temp 'b' array
        if(c[z] % a[x] === 0)b.push(c[z])
      }  
      //Add the reduced temp 'b' and each prime factor into my result array
      result[x] = [a[x], b.reduce((a, b) => a+b)]
      //Reset my temp 'b' array for the next loop 
      b = [];
    }
    
    return result
  }
  function is_prime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++)
      {
        if (num % i === 0) return false;
      }
      return true;
  }