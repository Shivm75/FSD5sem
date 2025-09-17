var row = 4;

for(let r = 1 ; r <= row ; r++){
    let str = "" ;
    for(let i = row - r ; i > 0 ; i-- ){    
        str += " "
    }

    for(let s = 1 ; s <= 2*r -1 ; s++){
        str += "*"
    }
    console.log(str)

}