function calculate(array){
    let sum=0;
    array.forEach(element => {
        sum+=element;
    });
    console.log(sum);

    let reverseSum=0;
    array.forEach(element => {
        reverseSum+=1/element;
    });
    console.log(reverseSum.toFixed(4));


    let string='';
    array.forEach(element => {
        string+=String(element);
    });
    console.log(string);

}

calculate([2,4,8,16]);