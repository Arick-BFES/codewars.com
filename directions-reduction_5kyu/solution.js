function dirReduc(arr){
    let newmap = arr.map((x) => {
      if(x=="NORTH") return 1;
      if(x=="SOUTH") return 2;
      if(x=="EAST") return 3;
      if(x=="WEST") return 4;
    }).join('');
    var oldmap = "";
    while (newmap.length != oldmap.length) {
      oldmap = newmap;
      newmap = newmap
        .replace("12", "")
        .replace("21", "")
        .replace("34", "")
        .replace("43", "")  
      }
    return Array.from(newmap).map((x) =>{
      if(x=="1") return "NORTH";
      if(x=="2") return "SOUTH";
      if(x=="3") return "EAST";
      if(x=="4") return "WEST";
    })
  }
  
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])