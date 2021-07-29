function createFormatter(separator,symbol,first,originalFormatter){

    return function (numberToFormat){
       return originalFormatter(separator,symbol,first, numberToFormat);
         
    }
    
}

function currencyFormatter(separator, symbol, symbolFirst, numberToFormat) {
    let result = Math.trunc(numberToFormat) + separator;
    result += numberToFormat.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' '  + symbol;
    }

let dollarFormatter = createFormatter(',','$',true,currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));