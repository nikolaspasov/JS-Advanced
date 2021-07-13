function addItem() {
    
    let listElement = document.getElementById('items');

    let inputElement = document.getElementById('newItemText');



    let newItemListElement = document.createElement('li');
    newItemListElement.textContent=inputElement.value;

    listElement.appendChild(newItemListElement);
    inputElement.value=null;
}