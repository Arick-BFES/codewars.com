function validParentheses(p1){
    let p2 = ''
    while(p1.length !== p2.length){
      p2=p1;
      p1 = p1.replace('()', '')
    }
    return(p1.length==0)
  }