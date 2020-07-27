function isValidWalk(walk) {
    let numArray = walk.map((x) => {
      if (x=="n") return 2;
      if (x=="s") return -2;
      if (x=="w") return 1;
      if (x=="e") return -1;
    });
    let result = numArray.reduce((a, b) =>{
      return a + b
    });
    if (walk.length > 10 || result !== 0 || walk.length < 10){
      return false;
    }else{
      return true;
    }
  }