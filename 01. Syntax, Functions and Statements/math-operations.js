function calculate(num1,num2,symbol){
    let result;
    switch(symbol){
        case'+': result=num1+num2;break;
        case'-': result=num1-num2;break;
        case'*': result=num1*num2;break;
        case'/': result=num1/num2;break;
        case'%': result=num1%num2;break;
        case'**': result=Math.pow(num1,num2);break;
    }
    console.log(result)
}
