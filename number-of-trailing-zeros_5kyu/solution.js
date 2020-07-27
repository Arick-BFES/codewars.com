function zeros (n) {
    if (n<=0) return 0;
    let count = 0;
    for (let i = 5; i <= n; i*=5){
      count+=Math.floor(n/i)
    }
    return count
  }