function print(string1, string2, string3){
    let length1 = string1.length;
    let length2 = string2.length; 
    let length3 = string3.length;
    
    let totalLength = length1+length2+length3;
    let averageLength = Math.round(totalLength/3);

    console.log(totalLength);
    console.log(averageLength);
}
