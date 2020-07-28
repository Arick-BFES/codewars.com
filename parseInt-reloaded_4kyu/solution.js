function parseInt(s) {
    const nWords ={
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, 
        six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
        eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
        fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18,
        nineteen: 19, twenty: 20, thirty: 30, forty: 40,
        fifty: 50, sixty: 60, seventy: 70, eighty: 80,
        ninety: 90, hundred: 100, thousand: 1000,
        million: 1000000, billion:1000000000
    }
    let result = 0;
    let numberHold = []
    s = s.replace(/ and/g,'')
    let ps = s.split(/[\s -]/ig);
    for (i=0; i<ps.length; i++){
        if(nWords[ps[i]] === 1000000){
            console.log(result)
            result *= 1000000
            numberHold.push(result);
            result = 0
        }else if (nWords[ps[i]] === 1000){
            console.log(result)
            result *= 1000
            numberHold.push(result);
            result = 0
        }else if (nWords[ps[i]] === 100){
            result *= 100  
        }else{
            result += nWords[ps[i]]
        }
    }
     numberHold.push(result);
     return numberHold.reduce((a, b)=> a+b)
  }