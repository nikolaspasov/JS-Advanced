const { assert } = require('chai');
const rgbToHexColor = require('../RGB-to-Hex');

describe('Test Program functionality',function(){

    it('Return undefined if red value is invalid',function(){
        assert.equal(rgbToHexColor(-1,10,15),undefined);
    })
    it('Return undefined if green value is invalid',function(){
        assert.equal(rgbToHexColor(89,-1,66),undefined);
    })
    it('Return undefined if blue value is invalid',function(){
        assert.equal(rgbToHexColor(55,98,-1),undefined);
    })
    it('Return undefined if green value is invalid',function(){
        assert.equal(rgbToHexColor(0,0,257),undefined);
    })
    it('Return undefined if blue value is invalid',function(){
        assert.equal(rgbToHexColor(7,89,'y'),undefined);
    })
    it('Return correct color value',function(){
        assert.equal(rgbToHexColor(15,34,100),'#0F2264');
    })
    it('Return correct color value',function(){
        assert.equal(rgbToHexColor(255,158,170),'#FF9EAA');
    })
    it('Return correct color value',function(){
        assert.equal(rgbToHexColor(0,0,0),'#000000');
    })
    
    
    
})