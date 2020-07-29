var tvRemote = function(word) {
             // 0   1    2    3   4    5    6    7
    let r1 = [['a','b','c','d','e','1','2','3'],//0
              ['f','g','h','i','j','4','5','6'],//1
              ['k','l','m','n','o','7','8','9'],//2
              ['p','q','r','s','t','.','@','0'],//3
              ['u','v','w','x','y','z','_','/']]//4

    let rHits = word.split('');
    let locations = [[0, 0]] //starting point
    let moves = 0;
    console.log(rHits)
    console.log(r1.indexOf('b', 0))
    console.log(rHits.length)
    for(i=0; i<=rHits.length; i++){
      //find the column
      for(j=0; j<5; j++){
        if(r1[j].indexOf(rHits[i]) >= 0){
          console.log("we are looking for", rHits[i]);
          console.log(j, r1[j].indexOf(rHits[i]));
          locations.push([j, r1[j].indexOf(rHits[i])]); 
        }
      }
    }
    console.log(locations)
    for (i=0; i<locations.length-1; i++){
      console.log(Math.abs(locations[i][0]))
      console.log(Math.abs(locations[i][1]))
      let movementx = Math.abs(locations[i][0] - locations[i+1][0]);
      let movementy = Math.abs(locations[i][1] - locations[i+1][1]);
      moves += Math.abs(locations[i][0] - locations[i+1][0]) + Math.abs(locations[i][1] - locations[i+1][1]);

      console.log(movementx, movementy)
      console.log(moves)
      
    }
    return moves + rHits.length;
  }
  
    // console.log(tvRemote("does"), 16);
     console.log(tvRemote("your"), 23);
     console.log(tvRemote("solution"), 33);
     console.log(tvRemote("work"), 20);
     console.log(tvRemote("for"), 12);
     console.log(tvRemote("these"), 27);
     console.log(tvRemote("words"), 25);