function solve() {
    
if(123==123){
    console.log(123);
}
    let addButtonElement = document.querySelector('.action button');
    let modulesFieldElement = document.querySelector('.modules');
    addButtonElement.addEventListener('click', function addModule(event){
        event.preventDefault();
        

        let moduleNameElement = document.querySelector('select[name="lecture-module"]');
        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let dateTimeElement = document.querySelector('input[name="lecture-date"]');


        let delButtonElement = document.createElement('button');
        delButtonElement.classList='red';
        

        let lectureHeadingElement = document.createElement('h4');

        // TODO: Create lecture
        let liElement = document.createElement('li')
        liElement.classList='flex'

        lectureHeadingElement.textContent= lectureNameElement.value+' '+
        dateTimeElement.value;
        
        delButtonElement.textContent='Del';

        liElement.appendChild(lectureHeadingElement);
        liElement.appendChild(delButtonElement);

        let ulElement = document.createElement('ul');
        ulElement.appendChild(liElement);
        // TODO: Create Module

        let moduleHeadingElement = document.createElement('h3');
        moduleHeadingElement.textContent=moduleNameElement.value;

        let moduleElement = document.createElement('div');
        moduleElement.classList='module';

        moduleElement.appendChild(moduleHeadingElement);
        moduleElement.appendChild(ulElement);

        modulesFieldElement.appendChild(moduleElement);


        modulesFieldElement 

    });
}