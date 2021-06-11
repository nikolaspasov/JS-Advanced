function print(arr){

    let newArr =
    [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER];
    for (let index = 0; index < arr.length; index++) {
        
        let currNum = arr[index];
        
        if(currNum<newArr[0]){
            newArr.splice(1,1,newArr[0]);
             newArr.splice(0,1,currNum);
            //newArr.splice(0,1,currNum);
        }
        else if(currNum>=newArr[0]&&currNum<newArr[1]){
            newArr.splice(1,1,currNum);
           }
         
        
        
       
    }
    if(newArr.includes(Number.MAX_SAFE_INTEGER)){
        newArr.pop();
    }
    console.log(newArr[0]+' '+newArr[1]);

}

 