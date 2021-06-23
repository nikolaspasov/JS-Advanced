function edit(reference, match, replacer){

    let originalText = reference.textContent;
    let matcher = new RegExp(match,'g');

    let edited = originalText.replace(matcher,replacer);

    reference.textContent=edited;
    
}


//RegExp() => 'g' is global match (find all matches) 