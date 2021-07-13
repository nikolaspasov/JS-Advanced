function addItem() {
    
    
    let listElement = document.getElementById('items');
    
    let inputElement = document.getElementById('newItemText');
    
    
    
    let newItemElement = document.createElement('li');
    newItemElement.textContent=inputElement.value;
    


    let deleteButtonElement = document.createElement('a');
    deleteButtonElement.setAttribute('href','#');
    deleteButtonElement.textContent= '[Delete]';


    deleteButtonElement.addEventListener('click',
    function deleteListElement(){
        newItemElement.remove();
    } );
    
    

    newItemElement.appendChild(deleteButtonElement);

     
    listElement.appendChild(newItemElement);

    inputElement.value=null;
    
    
    
}


 