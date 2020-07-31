// return the number of 9's used to count out 1 to n
function number9(n){
    let digits = n.toString().length-1;
    let result = 0;
    
     for (i=digits; n > 0; i--){
       let mag = (10**i)
       let base = Math.floor(n/mag)
       let comp = ((base*(10**i))/10) * i
            if(base == 9){
        let add = n - (mag*base);
        comp += add + 1
       }  
       n = n - mag * base
       result += comp
     }
    return result
  }