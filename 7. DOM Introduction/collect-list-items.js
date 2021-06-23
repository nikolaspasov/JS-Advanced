function scan(){


    let items = document.querySelectorAll("li");


    let textarea = document.querySelector("textarea");

    for(let item of items){
        textarea.value += item.textContent + '\n';
    }

}