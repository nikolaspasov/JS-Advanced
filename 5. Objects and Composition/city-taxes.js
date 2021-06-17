function cityTaxes(name,population,treasury){

    return{
    
    
    name,
    population,
    treasury,
    taxRate: 10,

    collectTaxes:function() {
        this.treasury += this.population*this.taxRate;
    },

    applyGrowth(percent){
        this.population+=Math.floor(this.population*(percent/100));
    },

    applyRecession(percentage){
        this.treasury-=Math.floor(this.treasury*(percent/100));
    },
};
  
}