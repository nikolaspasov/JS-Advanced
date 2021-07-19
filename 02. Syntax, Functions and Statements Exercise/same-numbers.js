function print(num){
    let firstDig = String(num)[0];
    let sum = 0;
    let same = true;
    for (let i = 0; i <String(num).length ; i++) {
        sum += Number(String(num)[i]);
        if(String(num)[i]!=firstDig){
            same=false;
        }
    }
    console.log(same);
    console.log(sum);

}
