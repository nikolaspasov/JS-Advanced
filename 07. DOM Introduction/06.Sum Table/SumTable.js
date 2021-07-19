function sumTable() {


    let tableElements = document.querySelectorAll('td');

    let sum=0;

    
    for (let element of tableElements) {
        
        let currElement = Number(element.textContent)

        if(!isNaN(currElement))
        {
            sum+=currElement;
 
        }
    }
    
    document.querySelector('#sum').textContent=sum;
   


    
}