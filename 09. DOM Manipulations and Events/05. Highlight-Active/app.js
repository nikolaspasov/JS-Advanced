function focused() {
    
    let sectionElementsNodeList = document.querySelectorAll('body div div input');

    let sectionElements = Array.from(sectionElementsNodeList);

    
    sectionElements.forEach(element=>{
   
        element.addEventListener('focus',function onFocusSection(ev){

            let inputParentElement = element.parentElement;
            inputParentElement.setAttribute('class','focused')
        });

        element.addEventListener('blur',function onBlurSection(ev) {

            let inputParentElement = element.parentElement;
            inputParentElement.removeAttribute('class');
        });
    
});
   


    


}

