const { assert } = require('chai');
const isSymmetric = require('../Check Symmetry/check-symmetry.js');

describe('Test Symmetry Function',function(){

    it('Return false if input is string',function(){
        assert.equal(isSymmetric('1'),false);
    });
    it('Return false if input is not an array',function(){
        assert.equal(isSymmetric(true),false);
    });
    it('Return false if elements are of different types',function(){
        assert.equal(isSymmetric([1,'1']),false);
    });
    it('Return true if array is symmetric',function(){
        assert.equal(isSymmetric([1,2,3,2,1]),true)
    });
    it('Return false if array is not symmetric',function(){
        assert.equal(isSymmetric([1,2,3,3,1]),false)
    });
    it('Check function with one array element',function(){
        assert.equal(isSymmetric([1]),true)
    });
    it('Check function with empty array',function(){
        assert.equal(isSymmetric([]),true)
    });
})