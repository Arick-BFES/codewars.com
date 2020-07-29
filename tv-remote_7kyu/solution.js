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
for(i=0; i<=rHits.length; i++){
//find the column & row
for(j=0; j<5; j++){
if(r1[j].indexOf(rHits[i]) >= 0){
 locations.push([j, r1[j].indexOf(rHits[i])]); 
}
}
}
for (i=0; i<locations.length-1; i++){
let movementx = Math.abs(locations[i][0] - locations[i+1][0]);
let movementy = Math.abs(locations[i][1] - locations[i+1][1]);
moves += Math.abs(locations[i][0] - locations[i+1][0]) + Math.abs(locations[i][1] - locations[i+1][1]);
}
return moves + rHits.length;
}