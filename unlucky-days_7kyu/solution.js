function unluckyDays(y){
    console.log(y)
    console.log(dayOf(y))
  let days = dayOf(y);
  console.log(isleapYear(y))
  if (isleapYear(y)) {
      if(days == 3 || days == 1 || days === 4 ) return 2;
      if(days == 2 || days == 6 || days == 5) return 1;
      if(days == 0 ) return 3;
  }else{
      if(days == 0 || days == 1 || days == 2) return 2;
      if(days == 3 ||days == 5 || days == 6) return 1;
      if(days === 4) return 3;
  }

}
function isleapYear(y){
  return y%400 == 0 ? true : y%100 == 0 ? false: y%4 == 0 ? true : false
}
function dayOf(x){
  let c = Math.floor(x/100)
  let d = x-(c*100) - 1
  //Zeller's Rule had to look it up :/
  let f = 1+(Math.floor(((13*11)-1)/5)+d+(Math.floor(d/4))+(Math.floor(c/4))-(2*c))
  let s = f%7
  if (s<0) s+=7
  console.log(c, d, f, s) 
  return s
}