function createTicket(ticketInput,sortInput){

class Ticket{

    constructor(city,price,status){
        this.city=city;
        this.price=price;
        this.status=status;
    }
}
let ticketsArray = [];
ticketInput.forEach(ticketElement => {
    let currTicket = String.ticketElement.split('|')
    let city = currTicket[0];
    let price = Number(currTicket[1]);
    let status = currTicket[2];
    let newTicket = new Ticket(city,price,status);
    ticketsArray.push(newTicket);
});


let sortedArray = ticketsArray.sort()


}











['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
   'Boston|126.20|departed'],
    'destination'