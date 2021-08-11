class Story{

    constructor(title,creator){

        this.title=title;
        this.creator=creator;
        this.comments = [];
        this.likes = [];
    }

    get likes(){
        if(this.likes.length ==0){
            return `${this.title} has 0 likes`;
        }
        else if(this.likes.length == 1){
            return `${this.likes[0]} likes this story!`;
        }
        else{
            return `${this.likes[0]} and ${this.likes.length-1} others like this story!`;

        }
    }

    like(username){

        if(this.likes.includes(username)){
            return("You can't like the same story twice");
        }
        else if(username===this.creator){
            return("You can't like your own story!");
        }
        else{
            this.likes++;
            return `${username} liked ${this.title}!`; 
        }
    }
    dislike(username){

        if(!this.likes.contains(username)){
            return("You can't dislike this story!");
        }
        else{
            return `${username} disliked ${this.title}!`; 
        }
    }
    comment(username,content,currId){

        if(id==undefined || !this.comments.some(x=>x.id=currId)){

            let newComment = {
                id: this.comments.length++,
                username: username,
                content:content,
                replies:[],
            };

            this.comments.push(newComment)
            return `${username} commented on ${this.title}`;
        }
        //else if(this.comments.some(x=>x.id=currId))

            let commentToReplyTo = this.comments.find(x=>x.currId=id);
            let newReply ={
                id: Number(`${commentToReplyTo.id}.${commentToReplyTo.replies.length+1}`),
                username:username,
                content:content,
            }

            commentToReplyTo.replies.push(newReply);
        
            return `You replied successfully`;
        


    }
    toString(sortingType){

        if(sortingType=='asc'){
            this.comments.sort((a,b => a.id.localeCompare())
        }
    }
}

// Title: {title}
// Creator: {creator}
// Likes: {likes}
// Comments:
// -- {id}. {username}: {content}
// -- {id}. {username}: {content}
// --- {replyId}. {username}: {content}
// --- {replyId}. {username}: {content}
// -- {id}. {username}: {content}