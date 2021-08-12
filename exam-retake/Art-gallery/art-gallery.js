class ArtGallery{

    constructor(creatorInput){

        this.creator=creatorInput;
        this.possibleArticles = {
             "picture":200,
             "photo":50,
             "item":250 
            };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModelInput, articleNameInput, quantityInput){

        let articleModelLowercase = articleModelInput.toLowerCase();
    //?????

        if(!(articleModelLowercase in this.possibleArticles)){

            throw new Error('This article model is not included in this gallery!');
        }
        else{

        let articleToFind = this.listOfArticles.find(x=>x.articleName==articleNameInput)
        if(articleToFind){
            articleToFind.quantity+=quantityInput;
            return `Successfully added article ${articleNameInput} with a new quantity- ${quantityInput}.`;
        }
        else{

            let newArticle = {
                articleModel: articleModelLowercase,
                articleName: articleNameInput,
                quantity: quantityInput,
            }
            this.listOfArticles.push(newArticle);
            return `Successfully added article ${articleNameInput} with a new quantity- ${quantityInput}.`;
        }
    }

    }

    inviteGuest(guestNameInput, personalityInput){
        
        let guestExists = false;

        this.guests.forEach(guest => {
            if(guest.guestName==guestNameInput){
                guestExists=true;
            
            }
        });
        if(guestExists){
            throw new Error(`${guestNameInput} has already been invited.`);
        }else{

        
            let pointsToAdd = 0;
           switch (personalityInput){
            case 'Vip':pointsToAdd=500;break;
            case 'Middle':pointsToAdd=250;break;
            default: pointsToAdd=50;break;
           }

           let newGuest = {
                guestName:guestNameInput,
                points: pointsToAdd,
                purchaseArticle: 0,
            }
            this.guests.push(newGuest);
            return `You have successfully invited ${guestNameInput}!`;
        
        }
    }

    buyArticle ( articleModelInput, articleNameInput, guestNameInput){

        let articleNameExists = false;
        let articleModelMatches = false;
        let currentQuantity = 0;
        let currentArticle;
        this.listOfArticles.forEach(article => {
            
            if(article.articleName==articleNameInput){
                articleNameExists=true;
                if(article.articleModel==articleModelInput){
                    articleModelMatches=true;
                }
                currentQuantity=article.quantity;
                currentArticle=article;
            }

        });
        let guestExists = false;
        let currentGuest;

        this.guests.forEach(guest => {
            if(guest.guestName==guestNameInput){
                guestExists=true;
                currentGuest=guest;
            }
        });

        if(articleModelMatches!=true){
            throw new Error('This article is not found.');
        }
        else if(currentArticle.quantity==0){
            return(`The ${articleName} is not available.`)
        }
        else if(guestExists==false){
            return `This guest is not invited.`;
        }
        else {

            let pointsForArticle = this.possibleArticles[currentArticle.articleModel];

            if(!currentGuest.points>=pointsForArticle){
                return `"You need to more points to purchase the article."`;
            }else{
                currentGuest.points-=pointsForArticle;
                currentArticle.quantity--;
                currentGuest.purchaseArticle++;
                return `${currentGuest.guestName} successfully purchased the article worth ${pointsForArticle} points.`;
            }
        }


        

    }
    showGalleryInfo (criteria){
        if(criteria=='article'){
            let info = [];
            info.push('Articles information:');
            this.listOfArticles.forEach(article => {
                
            info.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
            });
            let result = info.join('\n');
            return result;


        }else{

            let info = [];
            info.push('Guests information:');
            this.guests.forEach(guest=>{

                info.push(`${guest.guestName} - ${guest.purchaseArticle}`);

            });
            let result =info.join('\n');
            return result;
        }
    }



 }

//  const artGallery = new ArtGallery('Curtis Mayfield'); 
//  artGallery.addArticle('picture', 'Mona Liza', 3);
//  artGallery.addArticle('Item', 'Ancient vase', 2);
//  artGallery.addArticle('picture', 'Mona Liza', 1);
//  artGallery.inviteGuest('John', 'Vip');
//  artGallery.inviteGuest('Peter', 'Middle');
//  artGallery.buyArticle('picture', 'Mona Liza', 'John');
//  artGallery.buyArticle('item', 'Ancient vase', 'Peter');
//  console.log(artGallery.showGalleryInfo('article'));
//  console.log(artGallery.showGalleryInfo('guest'));


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.addArticle('243242', 'Mona Liza', 1));
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));