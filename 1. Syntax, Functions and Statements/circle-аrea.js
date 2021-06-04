function calculate(input){
    let inputType = typeof(input);

    if(inputType=="number"){
        let area = input*input*Math.PI;
        console.log(Math.round(area*100)/100);
    }
    else{
        console.log
        ('We can not calculate the circle area, because we receive a '+inputType+'.');
    }
}
