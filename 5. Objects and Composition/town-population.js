function print(arr){

    let cities ={};
    
    arr.forEach(string => {
        
        

        let name = string.split(' <-> ')[0];
        let population = Number(string.split(' <-> ')[1]);

        if(cities[name]){
            cities[name]+=population;
        }
        else{
            
            cities[name]=population;
            
        }
    });

    for(let city in cities){
      
        console.log(city + ' : ' + cities[city] );
    };
}




 
    