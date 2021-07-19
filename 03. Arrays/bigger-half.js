function print(arr){
    let half =0; 

    if(arr.length%2==0){
         half = (arr.length/2);
    }
    else{
         half = Math.floor(arr.length/2);
    }
    arr.sort((a,b)=>a-b);

    let newArr =[];
    newArr = arr.slice(half,arr.length);

    return(newArr);

}
