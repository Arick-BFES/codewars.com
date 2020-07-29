function humanReadable(s) {
    return ((Math.floor(s/3600))).toString().padStart(2, 0) + ":" + ((Math.floor(s/60))%60).toString().padStart(2, 0) + ":" + (s%60).toString().padStart(2, 0)
  }

  console.log(humanReadable(0), '00:00:00');
  console.log(humanReadable(5), '00:00:05');
  console.log(humanReadable(60), '00:01:00');
  console.log(humanReadable(86399), '23:59:59');
  console.log(humanReadable(359999), '99:59:59');