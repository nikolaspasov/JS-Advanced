function printDeck(cards){

    let resultString ='';
    let isInvalid = false;
    cards.forEach(element => {
        let face = '';
        let suit = '';
        
        if(element.length==3){
            face = element[0]+element[1];
            suit = element[2];
        }
        else{
            face=element[0];
            suit=element[1];
        }
    createCard(face,suit)
    function createCard(face,suit){
        let result = '';
    
        switch(face){
            case'2':break;
            case'3':break;
            case'4':break;
            case'5':break;
            case'6':break;
            case'7':break;
            case'8':break;
            case'9':break;
            case'10':break;
            case'J':break;
            case'Q':break;
            case'K':break;
            case'A':break;
            default:isInvalid=true;
                console.log(`Invalid card: ${element}`);
        }
        result+=face;
        switch(suit){
            case'S':result+= '\u2660' ; break;
            case'H':result+= '\u2665' ;break;
            case'D':result+= '\u2666' ;break;
            case'C':result+= '\u2663' ;break;
            default: isInvalid=true;
                console.log(`Invalid card: ${element}`);
        }


    
        resultString+= result+' ';
        
    }

    
    
});

if(isInvalid==true){
    return;
}
else{
    console.log(resultString);
}  
}