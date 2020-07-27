function fakeBin(x){
    return Array.from(x).map((a,b) => {if(a<5){return "0"}else{return "1"}}).join('')
  }