function colorize() {
    

    let tableElements = document.querySelectorAll('tr');

    for (let i = 0; i <  tableElements.length; i++) {

        if(i%2!=0)
        {
            tableElements[i].style.backgroundColor='teal';
        }
        
    }
}