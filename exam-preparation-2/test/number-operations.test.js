const { expect,assert } = require('chai');
const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};


describe('Tests', function() {
    describe('Test Pow Function', function() {

    it('Should return correct result', function() {
        
       
       assert.equal(numberOperations.powNumber(5),25);

    });
    });

    describe('Test numberChecker Function', function() {

    it('Should throw error if input is NaN', function() {
        
       
       assert.throw(() => numberOperations.numberChecker('w'),Error,('The input is not a number!'));

    });
    it('Should confirm that number is lower than 100', function() {
        
       
       assert.equal(numberOperations.numberChecker(67),'The number is lower than 100!');

    });
    it('Should confirm that number is greater or equal to 100', function() {
        
       
       assert.equal(numberOperations.numberChecker(120),'The number is greater or equal to 100!');

    });


    });
    describe('Test sumArrays Function', function() {

    it('Should create a new array from two arrays with equal length', function() {
        
        let arr1 = [1,2,3];
        let arr2 = [3,2,1];
        let resultArr = [4,4,4];

        assert.deepEqual(numberOperations.sumArrays(arr1,arr2), resultArr);

    });
    it('Should create a new array from two arrays with different length', function() {
        
        let arr1 = [1,2,3,4,5];
        let arr2 = [3,2,1];
        let resultArr = [4,4,4,4,5];

        assert.deepEqual(numberOperations.sumArrays(arr1,arr2), resultArr);

    });
    it('Should create empty array from two empty arrays', function() {
        
        let arr1 = [];
        let arr2 = [];
        let resultArr = [];

        assert.deepEqual(numberOperations.sumArrays(arr1,arr2), resultArr);

    });
    it('Should create empty array from two empty arrays', function() {
        
        let arr1 = ['a','b','c'];
        let arr2 = ['a','b','c'];
        let resultArr = ['aa','bb','cc'];

        assert.deepEqual(numberOperations.sumArrays(arr1,arr2), resultArr);

    });
    

    });
    

});