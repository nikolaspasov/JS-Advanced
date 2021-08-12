window.addEventListener('load', solve);

function solve() {
   
    let addButtonElement = document.querySelector('#add');
    

    addButtonElement.addEventListener('click',function addData(e){
       
        e.preventDefault();

        let modelInputElement = document.querySelector('#model').value;
    let yearInputElement = document.querySelector('#year').value;
    let descriptionInputElement = document.querySelector('#description').value;
    let priceInputElement = document.querySelector('#price').value;
    if(modelInputElement==''||yearInputElement==''||
    descriptionInputElement==''||priceInputElement==''){

    }
    else{
    

    document.querySelector('#model').value='';
    document.querySelector('#year').value=null;
    document.querySelector('#description').value='';
    document.querySelector('#price').value=null;

    //create elements

    //take FurnitureList Element
    let furnitureListElement = document.querySelector('#furniture-list');

    //TR object INFO
    let objectCointainingElementTR = document.createElement('tr');
    objectCointainingElementTR.classList='info';

    //chair
    let chairElement = document.createElement('td');
    chairElement.textContent=modelInputElement;

    //price 48.00
    let chairPrice = document.createElement('td');
    chairPrice.textContent=Number(priceInputElement).toFixed(2);

    //td buttons
    let buttonsElementTD = document.createElement('td');

    //button MORE
    let moreButtonElement = document.createElement('button');
    moreButtonElement.classList='moreBtn';
    moreButtonElement.textContent+='More Info';

    //button BUY
    let buyButtonElement = document.createElement('button');
    buyButtonElement.classList='buyBtn';
    buyButtonElement.textContent+='Buy it';

    //add Buttons to TD Buttons element
    buttonsElementTD.appendChild(moreButtonElement);
    buttonsElementTD.appendChild(buyButtonElement);


    objectCointainingElementTR.appendChild(chairElement);
    objectCointainingElementTR.appendChild(chairPrice);
    objectCointainingElementTR.appendChild(buttonsElementTD);

    //TR class HIDE
    let moreInfoClassHide = document.createElement('tr');
    moreInfoClassHide.classList='hide';

    //Year Element
    let yearMoreInfoElement = document.createElement('td');
    yearMoreInfoElement.textContent=`Year: ${yearInputElement}`;

    //Description Element
    let descriptionMoreInfoElement = document.createElement('td');
    descriptionMoreInfoElement.colSpan='3';
    descriptionMoreInfoElement.textContent=`Description: ${descriptionInputElement}`;

    //add moreInfo elements
    moreInfoClassHide.appendChild(yearMoreInfoElement);
    moreInfoClassHide.appendChild(descriptionMoreInfoElement);


    //Append All Elements to FurnitureList
    furnitureListElement.appendChild(objectCointainingElementTR)
    furnitureListElement.appendChild(moreInfoClassHide)
    

    
    //add MoreInfo action
    moreButtonElement.addEventListener('click',function showMore(e){

        e.preventDefault();
        if(moreButtonElement.textContent=='More Info'){
       moreButtonElement.textContent='Less Info';
       moreInfoClassHide.style='display: contents;';
    }
    else{
        moreButtonElement.textContent='More Info';
       moreInfoClassHide.style='display: none;'; 
    }
    })
    let totalPriceElement = (document.querySelector('.total-price'));
    
    buyButtonElement.addEventListener('click',function buy(e){

        e.preventDefault();

        let currFurniturePrice = Number(priceInputElement);
        objectCointainingElementTR.remove();
        moreInfoClassHide.remove();

        let previousPrice= Number(totalPriceElement.textContent);
        totalPriceElement.textContent=(previousPrice+currFurniturePrice).toFixed(2)
    })
    }
    })
    
    
}
{/* <table id="information">
                <thead>
                    <tr>
                        <th class="type">Model</th>
                        <th class="price">Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="furniture-list">
                    


                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:</td>
                        <td class="total-price">0.00</td>
                    </tr>
                </tfoot>
            </table> */}