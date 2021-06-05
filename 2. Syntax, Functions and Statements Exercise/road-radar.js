function determine(speed, area){
    let result = '';
    
    switch(area){
        case'motorway': 
        if(speed>130&&speed-130<=20){
            result =
`The speed is ${speed-130} km/h faster than the allowed speed of 130 - speeding`;
        }
        else if(speed>130&&speed-130<=40){
            result =
`The speed is ${speed-130} km/h faster than the allowed speed of 130 - excessive speeding`;
        }
        else if(speed>130&&speed-130>40){
            result =
`The speed is ${speed-130} km/h faster than the allowed speed of 130 - reckless driving`;
        }
        else{
            result = `Driving ${speed} km/h in a 130 zone`;
        } break;
        
        case'interstate': 
        if(speed>90&&speed-90<=20){
            result =
`The speed is ${speed-90} km/h faster than the allowed speed of 90 - speeding`;
        }
        else if(speed>90&&speed-90<=40){
            result =
`The speed is ${speed-90} km/h faster than the allowed speed of 90 - excessive speeding`;
        }
        else if(speed>90&&speed-90>40){
            result =
`The speed is ${speed-90} km/h faster than the allowed speed of 90 - reckless driving`;
        }
        else{
            result = `Driving ${speed} km/h in a 90 zone`;
        } break;
        
        case'city': 
        if(speed>50&&speed-50<=20){
            result =
`The speed is ${speed-50} km/h faster than the allowed speed of 50 - speeding`;
        }
        else if(speed>50&&speed-50<=40){
            result =
`The speed is ${speed-50} km/h faster than the allowed speed of 50 - excessive speeding`;
        }
        else if(speed>50&&speed-50>40){
            result =
`The speed is ${speed-50} km/h faster than the allowed speed of 50 - reckless driving`;
        }
        else{
            result = `Driving ${speed} km/h in a 50 zone`;
        } break;
        
        case'residential': 
        if(speed>20&&speed-20<=20){
            result =
`The speed is ${speed-20} km/h faster than the allowed speed of 20 - speeding`;
        }
        else if(speed>20&&speed-20<=40){
            result =
`The speed is ${speed-20} km/h faster than the allowed speed of 20 - excessive speeding`;
        }
        else if(speed>20&&speed-20>40){
            result =
`The speed is ${speed-20} km/h faster than the allowed speed of 20 - reckless driving`;
        }
        else{
            result = `Driving ${speed} km/h in a 20 zone`;
        } break;
        
    }
    console.log(result);
}
