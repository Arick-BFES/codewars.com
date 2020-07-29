function pigIt(str){
    console.log(str)
    let words = str.split(/\s/ig);
    let result = '';
   //if(RegExp(/[^a-z]+/).test(words[2])) 
    words.map((x, a, b) => {
        console.log(x)
        console.log(x.slice(1, x.length) + x.slice(0,1) + "ay")
         if(RegExp(/[a-z]+/i).test(x)) b[a] = x.slice(1, x.length) + x.slice(0,1) + "ay"
         if(x.length == 1 && RegExp(/[a-z]+/i).test(x)) b[a] = x + "ay"
    })
  return words.join(' ')

  }


  console.log(pigIt('This is my string'),'hisTay siay ymay tringsay')
  //console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
  console.log(pigIt('Hello world !'), "elHay orldway !");