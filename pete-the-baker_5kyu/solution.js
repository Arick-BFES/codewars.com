function cakes(recipe, available) {
    //make sure all ingredients are available
    let r = Object.getOwnPropertyNames(recipe);
    let a = Object.getOwnPropertyNames(available);
    for (let ing in r){
      if(!a.includes(r[ing])) return 0
    }
    //remove all the irrelevent ingredients
    a = a.filter((x) => r.includes(x))
    //sort the ingredients so we can match up the amounts
    a.sort();
    r.sort();
    let uses = [];
    //do I have eough of any 1 type of ingredient?
    //If so, find out how many times can I use each ingredient
    //and push that number into an array
      for (i=0; i<a.length; i++){
        if(recipe[r[i]] > available[a[i]]) return 0
        uses.push(Math.floor(available[a[i]] / recipe[r[i]]))
      }
    //return the smallest number in the array and Bob's your uncle
     return Math.min(...uses)
  }