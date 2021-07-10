function extractText() {
    

    let liElements = document.querySelectorAll('#items li');
    let textarea =document.querySelector('#result') ;
    for (let element of liElements) {
        
    textarea.value += element.textContent+'\n';
    }
     
    
}