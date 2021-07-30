function solve(face, suit){
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
        case'J':break;
        case'Q':break;
        case'K':break;
        case'A':break;
        default:throw Error('Error');return;
    }
    result+=face;
    switch(suit){
        case'S':result+= '\u2660' ; break;
        case'H':result+= '\u2665' ;break;
        case'D':result+= '\u2666' ;break;
        case'C':result+= '\u2663' ;break;
        default:throw Error('Error');return;
    }

    return result;
    
}

