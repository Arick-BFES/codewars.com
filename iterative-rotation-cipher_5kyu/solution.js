const IterativeRotationCipher = {};
IterativeRotationCipher.encode = function(n,str){
  for(j=1; j<n+1;j++){
    let spaceArr = [];
    let strArr = Array.from(str);
    arr1 = strArr.forEach((x, a) => {
      if(x==' ')spaceArr.push(a)
    })
    let noSpace = str.split(' ').join('');
    let a = noSpace.length
    if(n<a){
      let b = noSpace.slice(a-n, a)
      let c = noSpace.slice(0, a-n)
      noSpace = b+c
    }else{
      let e = n % a
      let b = noSpace.slice(a-n, a)
      let c = noSpace.slice(0, a-n)
      noSpace = b+c
    }
    let strMixed = Array.from(noSpace)
    for (i=0; i<spaceArr.length;i++){
      strMixed.splice(spaceArr[i],0,' ')
    }
    let strMixedArr = strMixed.join('').split(' ');
    let wordMix = [];
    strMixedArr.forEach((x,z) =>{
       a = x.length
      if(n<a){
        let b = x.slice(a-n, a)
        let c = x.slice(0, a-n)
        x = b+c
      }else{
        let e = n % a
        if(e !== 0){
          let b = x.slice(a-e, a)
          let c = x.slice(0, a-e)
          x = b+c
        }
      }
      strMixedArr[z] = x
    })
    str = strMixedArr.join(' ');
 }
  return n + " " + str;
};

IterativeRotationCipher.decode = function(str){
  let n = parseInt(str.split(' ')[0]);
  let strParse = str.split(' ');
  strParse.shift();
  str = strParse.join(' ');
  console.log(n)
  for(j=1; j<n+1;j++){ 
    let strMixedArr = str.split(' ');
    strMixedArr.forEach((x,z) =>{
      let a = x.length
      if(n<a){
        console.log("isless")
        let b = x.slice(0, n)
        console.log(b)
        let c = x.slice(n, a)
        console.log(c)
        x = c+b
      }else{
        let e = n % a
        if(e !== 0){
          let b = x.slice(0, e)
          let c = x.slice(e, a)
          x = c+b
        }
      }  
      strMixedArr[z] = x
    });
    str = strMixedArr.join(' ');
    let spaceArr = [];
    let strArr = Array.from(str);
    strArr.forEach((x, a) => {
      if(x==' ')spaceArr.push(a)
    });
    let noSpace = str.split(' ').join('');
    let a = noSpace.length
    if(n<a){
      let b = noSpace.slice(0, n)
      let c = noSpace.slice(n, a)
      noSpace = c+b
    }else{
      let e = n % a
      console.log(e);
      let b = noSpace.slice(a-n, a)
      let c = noSpace.slice(0, a-n)
      noSpace = c+b
    }
    let strMixed = Array.from(noSpace)
    for (i=0; i<spaceArr.length;i++){
      strMixed.splice(spaceArr[i],0,' ')
    }
    str = strMixed.join('');
  }
  return str 
};