module.exports = function getZerosCount(number, base) {
 
    
    let n = number;
    
    let zeros = 0;
    
    let b = getSimpleComposition(base);
    
    while (n > 0) {
        
        n = Math.floor(n/b);
        
       zeros += n;    
    }
  
    return zeros

};

function getSimpleComposition(base){
    
    let del = base/2;
    
    let arr = [];
    
    
    for (let i = 2 ; i < base; i++){
        
//        console.log(i);
        
        if (base%i == 0) {
            
            arr.push(i);
        }
    }
    
    return arr.length == 0? base : Math.max.apply(null, arr);
}