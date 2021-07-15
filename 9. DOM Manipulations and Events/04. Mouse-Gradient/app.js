function attachGradientEvents() {
    
    let gradientBoxElement = document.getElementById('gradient');

    let resultElement = document.getElementById('result');


    gradientBoxElement.addEventListener('mousemove', gradientHover);
    

    function gradientHover(event){

      
        resultElement.textContent= Math.trunc(event.offsetX/3)+'%';
    }
 

}