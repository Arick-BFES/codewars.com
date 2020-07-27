function digital_root(n) { 
    do{
        let nArr2=0, nArr1=[], result=n.toString(), len=result.length;
        for (i=0; i<len;i++){nArr1.push(result.substring(i, i+1));}
        nArr1.forEach((x)=>{nArr2 = nArr2 + parseInt(x); });
        n = nArr2;
    }
   while (n.toString().length > 1)
   return n;
  }

//   function digital_root(n) {
//     return (n-1) % 9 + 1
//   }