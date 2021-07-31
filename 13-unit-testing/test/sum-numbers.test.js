
const { assert, expect } = require('chai');
const sum = require('../sum-numbers.js');



    describe('Test SumNumbers function',function(){

        it('Array elements should be numbers',function(){
           
           assert(isNaN(sum([1,'a'])));
        });
        it('Function works with one array item',function(){
            assert.equal(sum([1]),1)
        })
        it('Function works with negative numbers',function(){
            assert.equal(sum([-1,2,-1]),0);
        })
        it('Function works with two numbers',function(){
            assert.equal(sum([2,-1]),1);
        })
    
    });
