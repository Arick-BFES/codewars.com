const InterlacedSpiralCipher = {};

InterlacedSpiralCipher.encode = function(str){
  let strL = str.length;
  let sq = Math.ceil(Math.sqrt(strL));
  let squareSize = sq*sq;
  let sr = Math.floor(sq/2);
  let result = []; 
  let result1 = [];
  let test1 = '';
  let result2 = '';
  
  if(strL < (squareSize)){
      let addSpace = squareSize-strL;
      for (i=1; i<=addSpace; i++){
        str = str + " ";
      }
      strL = str.length;
    }
  
  for (i = 0; i <= sr ; i++){
    if ((i === sr && sr % 2 == 0 && sq % sr !== 0) || (i === sr && sr % 2 !== 0 && sq % sr !== 0) || (i === sr && sr === 1)){
       console.log("This is the last", i);
       result.push((i*sq)+ i + 1);
    }else{
      for (j = 0; j < (sq - (i*2)) - 1; j++){
         result.push((j+(i*sq)+ i+ 1));
         result.push(((sq+(sq*j)- 1)+((sq*i)-i)+1));
         result.push(((strL - (1+j)-(i*sq)-i)+1));
         result.push(((strL - (sq+(j*sq))-((i*sq)-i))+1));
      }
    }
  }
   for (i=0;i<result.length;i++){
    test1 = result.findIndex((x) => {
      if(x == i + 1){
        return x;
      }
    });
     result2 = result2 + str.substring(test1, test1 + 1);
   }
    return result2;
    
};

InterlacedSpiralCipher.decode = function(str){
  let strL = str.length;
  let sq = Math.ceil(Math.sqrt(strL))
  let sr = Math.floor(sq/2);
  console.log(sq, sr);
  let result = ''; 
  for (i = 0; i <= sr ; i++){
    console.log("this is i: ", i, sr);
    if ((i === sr && sr % 2 == 0 && sq % sr !== 0) || (i === sr && sr % 2 !== 0 && sq % sr !== 0) || (i === sr && sr === 1)){
      console.log("This is the last", i);
      result = result + str.substring((i*sq)+ i, (i*sq)+ i+1);
    }else{
        for (j = 0; j < (sq - (i*2)) - 1; j++){
        result = result + str.substring(j+(i*sq)+ i, j+(i*sq)+ i+1);
        result = result + str.substring((sq+(sq*j)- 1)+((sq*i)-i), (sq+(sq*j)- 1)+((sq*i)-i) + 1);
        result = result + str.substring((strL - (1+j)-(i*sq)-i), (strL - (1+j)-(i*sq)-i) + 1);
        result = result + str.substring((strL - (sq+(j*sq))-((i*sq)-i)), (strL - (sq+(j*sq))-((i*sq)-i))+1);
      }
    }
  }
    return result.trimRight();
};