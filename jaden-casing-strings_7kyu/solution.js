String.prototype.toJadenCase = function () {
    const uString = [];
    let result2 = '';
    var res = this.split(" ");
    for (i = 0; i<res.length; i++){
      let uStringword = res[i].charAt(0).toUpperCase() + res[i].slice(1);
      uString.push(uStringword);
    }
    for (j = 0; j<uString.length; j++){
      result2 = result2 + uString[j] + " ";
    }
    return result2.trim();
  };