function calculate(num1,num2){
    let divisor=0;
    let largest =0;
    if(num1>num2) {
        largest=num1;
    }
    else{
        largest=num2;
    }
    for (let index = largest; index > 0; index--) {
        
        if(num1%index==0&&num2%index==0)
        {
            divisor=index;
            return divisor;
        }
    }         
}
