function incrementString (s) {
    let len = s.length
    let r = /\d+/;
    let t = s.match(r)
    
    if(t==null || t.index >= len) return s + "1"
    let num = parseInt(t[0]);
    num++
    let z = (len - t.index) - (num.toString().length)
    let y = '';
    if(z>0) y = '0'.repeat(z)
    return s.slice(0, t.index) + y + num
    
  }