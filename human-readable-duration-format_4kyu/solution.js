function formatDuration (s) {
    if (s==0) return "now";
    let time = {};
    let tArray = [" year"," day"," hour"," minute"," second"];
    let sArray = [31536000, 86400, 3600, 60, 1];
    let result = [];
    let r = "";
    for (let i=0; i<=4; i++) {
        if(s>=sArray[i]){
            time[i] = Math.floor(s/sArray[i])
            s -= sArray[i] * time[i]
            if(time[i]==1) result.push(time[i] + tArray[i])
            if(time[i]>1) result.push(time[i] + tArray[i] +  "s")
        }
    }
    if (result.length==1) return result[0].toString();
    for (let i = 0; i < result.length - 1; i++) {
        if (i == result.length-2) {
            r += result[i].toString() + " and " + result[i+1].toString()
        }else{
            r += result[i] + ", "
        }
    }
    return r
  }

  
   console.log(formatDuration(1), "1 second");
   console.log(formatDuration(62), "1 minute and 2 seconds");
   console.log(formatDuration(120), "2 minutes");
   console.log(formatDuration(3600), "1 hour");
   console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  