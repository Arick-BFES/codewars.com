function findOdd(A) {
    A=A.sort((a,b) => a-b)
    for(i=0;A.length>0;i++){
      let a = A.pop()
       if (a!==A[A.length-1]) return a
        a=A.pop()
      }
  }