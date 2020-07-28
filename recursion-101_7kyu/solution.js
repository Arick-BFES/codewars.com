function solve(a, b){
    return a < b*2 && b < a*2 || a==0 || b==0 ? [a, b] : a < b ? solve(a, (b%(a*2))) : solve((a%(b*2)), b)
  }