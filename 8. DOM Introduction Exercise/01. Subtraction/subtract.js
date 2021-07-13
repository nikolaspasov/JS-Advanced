function subtract() {
    


    let firstNumElement = (document.getElementById('firstNumber').value);
    let secondNumElement = (document.getElementById('secondNumber').value);


    let sum =Number(firstNumElement)-Number(secondNumElement);

    
    document.getElementById('result').textContent=sum;

}