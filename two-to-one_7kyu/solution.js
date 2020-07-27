function longest(s1, s2) {
    let s1A = s1.split('');
    let s2A = s2.split('');
    let u1 = [];
    s1A = s1A.concat(s2A);
    u1 = s1A.filter(uniq);
    console.log(u1.sort());
    return u1.sort().join('');
  }
  
  function uniq(a, b, c){
    return c.indexOf(a) === b;
  }