function print(arr){

    let cities ={};
    
    arr.forEach(string => {
        
        let key = string.split(' <-> ')[0];
        let value = Number(string.split(' <-> ')[1]);

        if(cities[key]){
            cities[key]+=value;
        }
        else{
            
            cities[key]=value;
            
        }
    });

    for(let city in cities){
      
        console.log(city + ' : ' + cities[city] );
    };
}