function bouncingBall(h,  b,  w) {
    console.log(h, b, w)
    if (h<=0|| b>=1 || b <=0|| w>=h) return -1
    let c = 0;
    do {
      h = h*b
      c++
    }
    while(h>w)
      c = (c*2)-1
    return c 
    
    
  }