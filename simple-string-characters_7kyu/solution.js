function solve(s){
    return [s.match(/[A-Z]/g).length, s.match(/[a-z]/g).length, s.match(/[0-9]/g).length, s.match(/\W/g).length]; 
  }