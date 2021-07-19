function print(arr){

    let newArr=[];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]<0){
           newArr.unshift(arr[index]);
        } 
        else if(arr[index]>=0){
            newArr.push(arr[index]);
        }
        
    }
    
        
    for (let index = 0; index < newArr.length; index++) {
       
        console.log(newArr[index]); 

    }


}
