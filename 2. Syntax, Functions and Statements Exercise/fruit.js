function calculate(fruit, weight, price){
    let finalPrice = price*(weight/1000);
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
    

}
