function pigIt(str){
    let words = str.split(/\s/ig);
    words.map((x, a, b) => {
         if(RegExp(/[a-z]+/i).test(x)) b[a] = x.slice(1, x.length) + x.slice(0,1) + "ay"
         if(x.length == 1 && RegExp(/[a-z]+/i).test(x)) b[a] = x + "ay"
    })
  return words.join(' ')
  }