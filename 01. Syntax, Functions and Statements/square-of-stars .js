function print(size){
    let line;
    if(size>0){
    for (let row = 0; row < size; row++) {
        let line='*';
        for (let col = 0; col < size-1; col++) {
           line+=' *'
        }
        console.log(line);
       
    }
    }
    else{
    for (let row = 0; row < 5; row++) {
        let line='*';
        
        for (let col = 0; col < 4; col++) {
            line+=' *'
        }
        console.log(line);
        
    }
    
}
}



