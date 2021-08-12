function solve(){
   

   
   let createButtonElement = document.querySelector('button.btn.create');
   console.log(createButtonElement);

   
      createButtonElement.addEventListener('click', function addArticle(e){
       
         e.preventDefault();
         let creatorInputElement = document.querySelector('#creator').value;
         let titleInputElement = document.querySelector('#title').value;
         let categoryInputElement = document.querySelector('#category').value;
         let contentInputElement = document.querySelector('#content').value;

 //title
 let titleTextElement = document.createElement('h1');
 titleTextElement.textContent=titleInputElement;

 //category
 let categoryTextElement = document.createElement('p');
 let categoryName = document.createElement('strong');
 categoryName.textContent=(categoryInputElement);
 categoryTextElement.textContent = `Category: `;
 categoryTextElement.appendChild(categoryName);

 //creator
 let creatorTextElement = document.createElement('p');
 let creatorName = document.createElement('strong');
 creatorName.textContent=creatorInputElement;
 creatorTextElement.innerHTML = `Creator: `;
 creatorTextElement.appendChild(creatorName);

 //content
 let contentTextElement = document.createElement('p');
 contentTextElement.innerHTML = contentInputElement;

 //button Div
 let buttonsElement = document.createElement('div');
 buttonsElement.classList='buttons';

 //del Button
 let delButtonElement = document.createElement('button');
 delButtonElement.classList='btn delete';
 delButtonElement.textContent='Delete';

 //archive Button
 let archiveButtonElement = document.createElement('button');
 archiveButtonElement.classList='btn archive';
 archiveButtonElement.textContent='Archive';

 buttonsElement.appendChild(delButtonElement);
 buttonsElement.appendChild(archiveButtonElement);
 


   //article element
   let articleElement = document.createElement('article');
   articleElement.appendChild(titleTextElement);
   articleElement.appendChild(categoryTextElement);
   articleElement.appendChild(creatorTextElement);
   articleElement.appendChild(contentTextElement);
   articleElement.appendChild(buttonsElement);


   let sectionElement = document.querySelector('.site-content section');
   sectionElement.appendChild(articleElement);


   console.log(sectionElement);
   console.log(articleElement);
      })
   }
    
   
   
   
{/* <div class="site">
    <header>
      <h1>SoftBlog</h1>
      <section>
      </section>
    </header>

    <div class="site-content">

      <main>
        <section>
          <h2>Posts</h2>

          
        </section>
      </main> */}