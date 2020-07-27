function factorSum(s) {
    let a = [];
  while (isPrime(s) == false && s !== 4){
    for (let i = 2; i <= s; i++){   
      while (isPrime(i) && s % i === 0) {
        a.push(i);
        s /= i;
      };
    };
    s = a.reduce((a,b) => a+b);
    a=[];
  }
   return s
  }
  function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
      }
      return true;
  }