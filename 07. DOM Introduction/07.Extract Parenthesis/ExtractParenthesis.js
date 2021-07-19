function extract(content) {

    let text = document.getElementById(content);

    console.log(text.textContent);

   let extraction = text.substring('(',')');

   console.log(extraction);

}