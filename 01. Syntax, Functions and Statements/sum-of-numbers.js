function calculate(n,m){
    let num1 = Number(n);
    let num2 = Number(m);
    let sum=0;

    for (let currNum = num1; currNum <= num2; currNum++) {
    
      sum+=currNum;
    }
    
    console.log(sum);
}

