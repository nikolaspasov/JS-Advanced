class Parking{

    constructor(capacity){
        this.capacity=capacity;
        this.vehicles = [];
    }


    addCar(carModel,carNumber){

        if(this.vehicles.length==this.capacity){
            throw new Error('Not enough parking space.');
        }
        else{
            let car={
                carModel: carModel,
                carNumber: carNumber,
                payed: false,
            }
            this.capacity--;
            this.vehicles.push(car);
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
            
        }
    }

    removeCar(carNumberToFind){

        let found = false;
        this.vehicles.forEach(vehicle => {
            if(vehicle.carNumber==carNumberToFind){
                this.vehicles.splice(this.vehicles.indexOf(vehicle),1);
                found = true;
                if(vehicle.payed==false){
                    throw new Error(`${carNumberToFind} needs to pay before leaving the parking lot.`);
                }
                
                
            }
        });
        if(found==false){
            throw new Error("The car, you're looking for, is not found.");
        }
        else{
            this.capacity++;
            return `${carNumberToFind} left the parking lot.`;
        }
    }

    pay(carNumberToFind){

        let found = false;
        this.vehicles.forEach(vehicle => {
            if(vehicle.carNumber===carNumberToFind){
                if(vehicle.payed==true){
                    throw new Error(`${carNumberToFind}'s driver has already payed his ticket.`);
                }
                found=true;
                vehicle.payed=true;
                
            }
        });
        if(found==false){
            throw new Error(`${carNumberToFind} is not in the parking lot.`);
    }
         else{
        return `${carNumberToFind}'s driver successfully payed for his stay.`;
    }

    };
    getStatistics(carNumberToFind){

        let output = [];
        if(carNumberToFind==undefined){
            output.push( `The Parking Lot has ${this.capacity} empty spots left.`);

            let sortedVehicles = this.vehicles
            .sort((a,b) => 
            a.carModel.localeCompare(b.carModel));
            
            sortedVehicles.forEach(vehicle => {
               output.push(`${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed ? 'Has payed' : 'Not payed'}`);
                
            });
            return output.join('\n');

        }
        else{

            this.vehicles.forEach(vehicle => {
                if(vehicle.carNumber===carNumberToFind){
               
                 output= `${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed ? 'Has payed' : 'Not payed'}`;
                    
                }
            });
            return output;
        }
        
    }

}




// const parking = new Parking(12);
// console.log(parking.addCar('Volvo', 'TTSTS12'));
// console.log(parking.addCar('BMW', '123'));
// console.log(parking.getStatistics());
// console.log(parking.pay('TTSTS12'));
// console.log(parking.removeCar('TTSTS12'));
