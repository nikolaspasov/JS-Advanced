function validate() {
    
    let inputFieldElement = document.getElementById('email');

    var validRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

    inputFieldElement.addEventListener('change', function checkEmail(){

       if(inputFieldElement.value.match(validRegex)){

        inputFieldElement.setAttribute('class','');
       }
       else{
           
        inputFieldElement.setAttribute('class','error');
       } 
    })
}