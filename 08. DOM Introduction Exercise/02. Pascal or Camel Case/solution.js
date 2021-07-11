function solve() {
  

  let input = document.getElementById('text').value;
  let caseType = document.getElementById('naming-convention').value;

  let editedText;
  console.log(input);
  console.log(caseType);
 switch (caseType) {
   
   case 'Camel Case': 
   editedText= input.toLowerCase();
   document.getElementById('result').textContent=editedText;
   break;

   case 'Pascal Case':
   editedText= input.toLowerCase();
   document.getElementById('result').textContent=editedText;
   break;
   
   default:
     
    document.getElementById('result').textContent='Error!';
 }
 


}