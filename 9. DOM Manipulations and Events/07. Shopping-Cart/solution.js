function solve() {
   

   let productsNodeList = document.querySelectorAll('.product');


   let productsList = Array.from(productsNodeList);
   let sum = 0;
   let listOfAddedProducts = [];
   let textAreaElement = document.querySelector('textarea');

   productsList.forEach(product => {

      product.querySelector('.add-product').addEventListener
      ('click',function AddProduct(){

         let productName = product.querySelector('.product-title').textContent;
         let productPrice = product.querySelector('.product-line-price').textContent;

         textAreaElement.textContent+=
         `Added ${productName} for ${productPrice} to the cart.\n`

         sum+=Number(productPrice);
         if(!listOfAddedProducts.includes(productName))
         {
            listOfAddedProducts.push(productName);
         }
        
         
      });
 
   });

   let checkoutButtonElement = document.querySelector('.checkout');

   checkoutButtonElement.addEventListener('click',function checkoutAllItems(){

      textAreaElement.textContent+=
      `You bought ${listOfAddedProducts.join(', ')} for ${sum.toFixed(2)}.`;

      productsList.forEach(element => {
         element.querySelector('.add-product').disabled =true;
      });
      checkoutButtonElement.disabled=true;
   });


   
}