function list(names){
    let str = [];
    names.forEach(name => str.push(name.name));
    let len = str.length;
    const arr1 = str.filter(e => str.indexOf(e)<len - 2).join(", ")
    const arr2 = str.filter(e => str.indexOf(e)>=len - 2).join(' & ')
    if (arr1.length ==0)return arr2
    if (arr1.length >=1)return arr1 + ", " + arr2
  }