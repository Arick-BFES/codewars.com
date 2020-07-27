function mostFrequentDays(x){
    let c = Math.floor(x/100)
    let d = x-(c*100) - 1
    let f = 1+(Math.floor(((13*11)-1)/5)+d+(Math.floor(d/4))+(Math.floor(c/4))-(2*c))
    let s = f%7
    if (s<0) s+=7
    return isleapYear(x) ? s == 0 ? [dayWord((s+1)%7), dayWord(s)]:[dayWord(s), dayWord((s+1)%7)] : [dayWord(s)]
}

function dayWord(x){
var weekday = [];
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[x];
}
function isleapYear(y){
    return y%400 == 0 ? true : y%100 == 0 ? false: y%4 == 0 ? true : false
}