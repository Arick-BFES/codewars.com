function queueTime(c, n) {
    if(n>=c.length) return c.length==0 ? 0 : Math.max(...c)
    let q = [];
    let t = 0;
    q = c.slice(0, n)
    c = c.slice(n)
    do{
      t+=Math.min(...q)
      q = q.map(x => x - Math.min(...q))
      q.forEach((x, y) => {
        if(x===0){
        if(c.length>0)q[y] = c.shift()
        }
      })
    }
    while(c.length>0)
    t+=Math.max(...q)
    return t
  }