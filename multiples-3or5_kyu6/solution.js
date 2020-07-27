function solution(n){
    console.log(n)
    let result = [];
    for(i=1;i<n;i++){
      if(i%3==0||i%5==0){
        if(!result.includes(i))result.push(i);
      }
    }
    return n<=3 ? 0 : result.reduce((a,b) => a+b)
  }