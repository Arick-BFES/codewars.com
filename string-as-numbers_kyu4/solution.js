function sumStrings(a,b) { 
    let sum = "", t = "", d = "";
    let d1 = 0, d2 = 0, c = 0;
    a = a.replace(/^0+/, '');
    b = b.replace(/^0+/, '');
    let al = a.length;
    let bl = b.length;
    
    if(bl > al ){
      let temp = b;
      b = a;
      a = temp;
    }
    
    for (let i = 0; i < a.length; i++) {
      d1 = parseInt(a.charAt(a.length - 1 - i));
      d2 = parseInt(b.charAt(b.length - 1 - i));
      d2 = (d2) ? d2 : 0;
      t = (c + d1 + d2).toString();
      d = t.charAt(t.length - 1);
      c = parseInt(t.substr(0, t.length - 1));
      c = (c) ? c : 0;
      console.log(c, t, d)
      console.log(sum)
      sum = (i === a.length - 1) ? t + sum : d + sum;    
    }
    return sum;
  }