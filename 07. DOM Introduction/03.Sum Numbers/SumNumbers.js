function calc() {
   
    let firstNumElement = document.querySelector('#num1');
    let secondNumElement = document.querySelector('#num2');
    
    let sum = Number(firstNumElement.value)+Number(secondNumElement.value);
    
    document.querySelector('#sum').value = sum;
}
