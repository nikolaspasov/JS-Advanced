let sumModule = function sum(arr,start,end){

    let selectedArr = arr.slice(start,end);
    let result = 0;
    selectedArr.forEach(element => {
        result+=element;
    });

}
module.exports=sumModule;