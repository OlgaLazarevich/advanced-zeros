module.exports = function getZerosCount(number, base) {
    
    
 
    
    let n = number;
    
    let zeros = 0;
    
    let b = setNum(base);
    
//    console.log(b);
    
    while (n > 0) {
        
        n = Math.floor(n/b);
        
       zeros += n;    
    }
  
    return zeros

};


function setNum(x) {
	
		let arr = [];
		let num = 2;

    
	function getNum (x) {
		if (x === '1') {
				arr.push(1);
				}
		if(x % num === 0){
		 arr.push(num);
		 x = x / num;
		 getNum(x);	
	
	}else if(x % num !== 0){
		if(!(x <= num)){
			num++;
		  getNum(x);
		}
	}
		
	}
    
    getNum (x);
    
//    console.log(Math.max.apply(null, arr));
    return Math.max.apply(null, arr);
}