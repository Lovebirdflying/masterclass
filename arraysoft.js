(function(){
    
    /* 
    trying to add array soft method to the prototype
   This adds a new method called soft to the Array prototype. 
   This allows every array to use the soft method, 
   similar to how arrays can use methods like map or filter
    */

    Array.prototype.soft = 
    function(callback, firstValue){
// checking if the array is empty and if no value is provided
    
if(this.length === 0 && firstValue === undefined ){
    throw("can't reduce an empty array with no first value");
}
//  declare a storage for accumulator
let accumulator =  firstValue !== undefined ? firstValue : this[0];

// declare storage for the index

let startIdex = firstValue !== undefined ? 0:1;

// trying to write a code that loop through the array and apply call back function 

for(let i = startIdex; i < this.length; i++){
    accumulator = callback(accumulator, this[i], i, this);
}

// return the accumulated value

return accumulator

};
})

();

module.exports = Array.prototype.soft;