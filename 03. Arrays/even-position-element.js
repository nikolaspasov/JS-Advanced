function print(arr){

    let result = '';
    for (let index = 0; index < arr.length; index+=2) {
        
        result+=arr[index]+' ';
    }
    console.log(result);
}
//let arr=['20','30','40','50','60'];
//print(arr);