function editElement(referenceToElement, match, replacer) {
   
let regex = new RegExp(match,'g');

let originalText = referenceToElement.textContent;
let editedText = referenceToElement.textContent.replace(regex, replacer);


referenceToElement.textContent=editedText;




}