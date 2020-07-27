function lastFibDigit(n){
    //no calculation just the 60 different combinations!!
    const fibbArr = [[0,2,4,6,8],
                     [5,1,7,3,9],
                     [5,3,1,9,7],
                     [0,4,8,2,6],
                     [5,7,9,1,3],
                     [5,1,7,3,9],
                     [0,8,6,4,2],
                     [5,9,3,7,1],
                     [5,7,9,1,3],
                     [0,6,2,8,4],
                     [5,3,1,9,7],
                     [5,9,3,7,1],]
    
    console.log(fibbArr);
    let b = (n%5)
    let a = (n%12)
    return fibbArr[a][b]
    }