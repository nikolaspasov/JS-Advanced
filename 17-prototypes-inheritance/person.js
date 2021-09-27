function Person(firstName,lastName){

    this.firstName=firstName;
    this.lastName=lastName;

    Object.defineProperty(this,'fullName',{

     get:function(){
        return `${this.firstName} ${this.lastName}`;
     },

     set: function(fullName){
        this.firstName= fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];
     }
    }
  );
}



let person = new Person('Peter', 'Ivanov');
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla