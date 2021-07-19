function calculate(steps, length,speed){
   let distance = steps*length/1000;
   let breaks = distance*1000/500;
   let speedMeters = speed/60;
   let seconds = distance/speedMeters*60;
   let minutes = Math.floor(seconds/60);
   seconds-=(minutes*60);
   let hours =Math.floor(minutes/60);
   minutes-=hours*60;
   minutes=Math.floor( minutes+breaks);
   let string='';
    if(hours<10){
    string +=`0${hours}`;
    }
    else{
    string +=`${hours}`;
    }
    if(minutes<10){
    string += `:0${minutes}`;
    }
    else{
    string +=`:${minutes}`;
    }
    if(seconds<10){
    string += `:0${Math.round(seconds)}`;
    }
    else{
        string +=`:${Math.round(seconds)}`;
    }
    
    return string;
}




