function solve(area, vol, JSONInput) {
   
    const input = JSON.parse(JSONInput)

    
   let result = [];
   input.forEach(inputElement => {
       
    let currResult = {
    area: area.call(inputElement),
    volume: vol.call(inputElement),
    };

    result.push(currResult)
    
    });
    return result;
}
 
// let example = `[{"x":"1","y":"2","z":"10"},
// {"x":"7","y":"7","z":"10"},
// {"x":"5","y":"2","z":"10"}
// ]`;
// console.log(solve(area,vol,example));

// function area() {
//     return Math.abs(this.x* this.y);
// }
// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// }