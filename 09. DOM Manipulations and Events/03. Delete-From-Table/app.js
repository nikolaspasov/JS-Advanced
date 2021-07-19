function deleteByEmail() {
    


    let emailInputElement = document.querySelector("input[name='email']").value;
    
    let membersNodeList = document.querySelectorAll("tbody>tr");

    let membersListElement = Array.from(membersNodeList);

    let foundExistingMember = false;
    


    membersListElement.forEach(member => {
        
        if(member.textContent.includes(emailInputElement)){
            member.remove();
            let resultElement = document.getElementById('result');
            resultElement.textContent='Deleted';
            foundExistingMember=true;
        }
        
    });
    if(foundExistingMember==false)
    {
        let resultElement = document.getElementById('result');
        resultElement.textContent='Not found.';
    }
}