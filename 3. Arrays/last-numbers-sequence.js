function print(n,k){

    let arr=[1];

    for (let i = 0; i < n-1; i++) {
        let currNum = 0;

        for (let m = i; m>i-k; m--) {
            
            if(m<0){
                break;
            }

        currNum += Number(arr[m]);
        
        }   

        arr.push(currNum);
    }
    
   return arr;

}





