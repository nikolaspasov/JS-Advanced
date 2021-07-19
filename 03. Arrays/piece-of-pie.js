function cut(arr,firstPie,lastPie){

    let start = arr.indexOf(firstPie);
    let end = arr.indexOf(lastPie);

    return(arr.slice(start,end+1))
}

