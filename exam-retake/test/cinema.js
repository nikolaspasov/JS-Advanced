const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

const{assert,expect} = require('chai');

describe("Cinema tests", function() {
    describe("Check showMovies function", function() {
        it("Should return confirmation that there are no movies", function() {
           assert.equal(cinema.showMovies([]),'There are currently no movies to show.');
        });
        

        //??????
        it("Should return available movies", function() {
            let movies = ['Kong', 'War', 'Joker'];
            let stringResult = movies.join(', ');
            assert.equal(cinema.showMovies([movies]),stringResult);

        });
        it("one movie", function() {
            let movies = ['Kong'];
            let stringResult = movies.join(', ');
            assert.equal(cinema.showMovies([movies]),stringResult);

        });
        it("two movies", function() {
            let movies = ['Kong','Niki'];
            let stringResult = movies.join(', ');
            assert.equal(cinema.showMovies([movies]),stringResult);

        });
        it("two movies", function() {
            let movies = ['Kong','Niki',123];
            let stringResult = movies.join(', ');
            assert.equal(cinema.showMovies([movies]),stringResult);

        });


     });
    describe("Check ticketPrice function", function() {
        it("Should throw error if type is not valid", function() {
           
           assert.throws(()=>cinema.ticketPrice('InvalidType'),Error)
        });
        it("Should return correct price for projection type", function() {
           
           assert.equal(cinema.ticketPrice('Normal'),7.50)
        });

     });
    describe("Check swapSeatsInHall function", function() {
        it("Should return unsuccessful change if one of the numbers does not exist", function() {
           
           assert.equal(cinema.swapSeatsInHall(1),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if one of the numbers is not an integer", function() {
           
           assert.equal(cinema.swapSeatsInHall(1,'b'),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if the numbers are not integers", function() {
           
           assert.equal(cinema.swapSeatsInHall(undefined,'b'),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if a number is bigger than 20", function() {
           
           assert.equal(cinema.swapSeatsInHall(1,21),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if the numbers are bigger than 20", function() {
           
           assert.equal(cinema.swapSeatsInHall(25,21),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if one number is equal to 0", function() {
           
           assert.equal(cinema.swapSeatsInHall(0,21),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if the numbers are less than 0", function() {
           
           assert.equal(cinema.swapSeatsInHall(-6,-5),'Unsuccessful change of seats in the hall.')
        });
        it("Should return unsuccessful change if the numbers are equal", function() {
           
           assert.strictEqual(cinema.swapSeatsInHall(7,7),'Unsuccessful change of seats in the hall.')
        });
        it("Should return confirmation of changed seats", function() {
           
           assert.equal(cinema.swapSeatsInHall(7,20),'Successful change of seats in the hall.')
        });
        it("Should return confirmation of changed seats2", function() {
           
           assert.equal(cinema.swapSeatsInHall(1,10),'Successful change of seats in the hall.')
        });
        it("Should return confirmation of changed seats3", function() {
           
           assert.equal(cinema.swapSeatsInHall(1,20),'Successful change of seats in the hall.')
        });

        //test
        it("first number is not int", function() {
           
           assert.equal(cinema.swapSeatsInHall(true,19),'Unsuccessful change of seats in the hall.')
        });
        it("second number is not int", function() {
           
           assert.equal(cinema.swapSeatsInHall(3,'sk'),'Unsuccessful change of seats in the hall.')
        });
        it("both number is not int", function() {
           
           assert.equal(cinema.swapSeatsInHall(undefined,'sk'),'Unsuccessful change of seats in the hall.')
        });
        it("first number is zero", function() {
           
           assert.equal(cinema.swapSeatsInHall(0,3),'Unsuccessful change of seats in the hall.')
        });
        it("second number is zero", function() {
           
           assert.equal(cinema.swapSeatsInHall(12,0),'Unsuccessful change of seats in the hall.')
        });
        it("both number is zero", function() {
           
           assert.equal(cinema.swapSeatsInHall(0,0),'Unsuccessful change of seats in the hall.')
        });
        it("first number is negative", function() {
           
           assert.equal(cinema.swapSeatsInHall(-12,7),'Unsuccessful change of seats in the hall.')
        });
        it("second number is negative", function() {
           
           assert.equal(cinema.swapSeatsInHall(3,-9),'Unsuccessful change of seats in the hall.')
        });
        it("both number is negative", function() {
           
           assert.equal(cinema.swapSeatsInHall(-3,-9),'Unsuccessful change of seats in the hall.')
        });
        it("first number is >20", function() {
           
           assert.equal(cinema.swapSeatsInHall(23,9),'Unsuccessful change of seats in the hall.')
        });
        it("second number is >20", function() {
           
           assert.equal(cinema.swapSeatsInHall(2,98),'Unsuccessful change of seats in the hall.')
        });
        it("both number is >20", function() {
           
           assert.equal(cinema.swapSeatsInHall(22,98),'Unsuccessful change of seats in the hall.')
        });
        it("first number is NaN", function() {
           
           assert.equal(cinema.swapSeatsInHall(NaN,12),'Unsuccessful change of seats in the hall.')
        });
        it("first number is floating", function() {
           
           assert.equal(cinema.swapSeatsInHall(2.34,12),'Unsuccessful change of seats in the hall.')
        });
        it("both numbers are floating", function() {
           
           assert.equal(cinema.swapSeatsInHall(12.23,2.23),'Unsuccessful change of seats in the hall.')
        });
        
        

     });

     
});

