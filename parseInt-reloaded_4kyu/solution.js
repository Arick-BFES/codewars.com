function parseInt(s) {
    const ones=['zero','one','two','three','four','five',
                'six','seven','eight','nine', 'ten','eleven',
                'twelve','thirteen','fourteen','fifteen',
                'sixteen','seventeen','eighteen','nineteen'];

    const tens=['zero','ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
    const mags=['hundred','thousand','million','billion'];
    const names=['ones','tens','mags'];
    //break apart the string into an array of parts
    result = [];
    let ps = s.split(/[\s -]/ig);
    if(ps.length==1) return ones.findIndex(x=> x==ps[0]);

    for (i=0; i<ps.length-1; i++){
        let res = 0;
        for(j=0; j<3; j++){
            let name=names[j];
            console.log(name)
            res = Array(name).findIndex(x=> x==ps[i])
        }
        
        if (res > 0) result.push(res);
        
    }
    console.log(result)
    console.log(ps);
  }


console.log(parseInt('one'));
//console.log(parseInt('twenty'));
console.log(parseInt('two hundred and forty-six'));