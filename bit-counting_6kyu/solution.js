var countBits = function(n) {
    let result = n.toString(2);
    let a = 0;
    for (i=0;i<result.length;i++){
      a=a+parseInt(result.substring(i, i+1));
    }
    return a
  };