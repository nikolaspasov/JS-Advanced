function solve(arr, start, end){

    if(!Array.isArray(arr)){
        return NaN;
    }
    if(start<0){
        start = 0;
    }
    if(end>arr.length){
        end=arr.length;
    }
    let newArr = arr.slice(start,end+1);

    let sum = 0;
    newArr.forEach(element => {
        sum+=Number(element);
    });
    return sum;
}

