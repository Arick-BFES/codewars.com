function validBraces(braces){
    let a = braces.split('');
    let g = a.length;
    let pos = 0;
    if (g%2 !==0){
      return false
    }
    if (g===2){
      let z = a[1];
      z = z.replace(')','(').replace(']','[').replace('}','{');
      if(JSON.stringify(a[0]) !== JSON.stringify(z)) return false
    }
    
    for (i=0; i<g; i = pos){
      let e = a[i];
      e = e.replace('(',')').replace('[',']').replace('{','}');
      let f = a.indexOf(e, i);
      if (f>=(g-2) || f == -1) f=g;
      let arr = a.slice(i, f + 1);
      if (arr.length % 2 !== 0) return false;
      let b = arr.slice(0,arr.length/2);
      let c = arr.reverse().slice(0, arr.length/2);
      let d = c.map(x => x.replace(')','(').replace(']','[').replace('}','{'));
      if (JSON.stringify(b) !== JSON.stringify(d)) return false
      pos = f + 1;
    }
    return true
  }