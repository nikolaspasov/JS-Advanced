const pizzUni = require('../pizza-place');
const {expect,assert} = require('chai');

describe("Pizza place test", function() {
    describe("makeAnOrder tests", function() {
    
        it("Check if error is thrown when no pizzas are ordered", function() {
            let order={
               
                orderedDrink:'coke',
            }
            expect(()=>pizzUni.makeAnOrder(order)).to.throw();
     });
        it("Check if error is thrown when there is no order", function() {
            
            expect(()=>pizzUni.makeAnOrder()).to.throw();
     });
      it("Should return confirmation when pizza is ordered", function() {
            
           let order={
               orderedPizza:'Margarita'

           }
           expect(pizzUni.makeAnOrder(order)).to.equal('You just ordered Margarita');
     });
      it("Should return confirmation when pizza and drink are ordered", function() {
            
           let order={
               orderedPizza:'Margarita',
               orderedDrink:'Coke',

           }
           expect(pizzUni.makeAnOrder(order)).to.equal
           ('You just ordered Margarita and Coke.');
     });

  });
//   [{
//       pizza name: 'name',
//       status: 'ready'/'preparing',
// }]
    describe("getRemainingWork tests", function() {
    
      it("Should return left pizzas",function(){

        let pizzaArr = [
            {pizzaName:'Margarita', status: 'ready'},
            {pizzaName:'Peperoni', status: 'preparing'},
        ];
       expect(pizzUni.getRemainingWork(pizzaArr)).to.equal
       (`The following pizzas are still preparing: Peperoni.`);

      })
      it("Should return confirmation that all orders are complete",function(){

        let pizzaArr = [
            {pizzaName:'Margarita', status: 'ready'},
            {pizzaName:'Peperoni', status: 'ready'},
        ];
       expect(pizzUni.getRemainingWork(pizzaArr)).to.equal
       ('All orders are complete!');
      })
      
     });
    describe("orderType tests", function() {
    
      it("Should get a discount if type of order is Carry Out",function(){

        expect(pizzUni.orderType(10,'Carry Out')).to.equal(10*0.9);
       

      })
      it("Should print totalSum of order",function(){

        expect(pizzUni.orderType(10,'Delivery')).to.equal(10);
        
      })
      
     });

  });
    

