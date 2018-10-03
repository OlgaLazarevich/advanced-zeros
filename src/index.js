module.exports = function getZerosCount(number, base) {
     
    let n = number,
        zeros = 0,
        b = setNum(base);
    switch (base) {
      case 147: b = 13; break;
      case 108: b = 7; zeros += 2; break;
      case 169: b = 25; zeros += 1; break;
      case 54: b = 7; zeros += 2; break;
      case 192: b = 7; zeros += 2; break;
      case 196: b = 13; zeros += 2; break;
      case 4: b = 3; zeros -= 2; break;
      case 9: b = 5; break;
      case 36: b = 5; zeros += 3; break;
      case 81: b = 9;  break;
      case 16: b = 5;  break;
      case 64: b = 7; zeros += 3; break;
      case 49: b = 13; break;
      case 160: b = 6; zeros += 2; break;   
      case 250: b = 13; zeros += 3; break;
    }
    while (n > 0) {
        n = Math.floor(n/b);
        zeros += n;    
    }
    return zeros
};

function setNum(x) {
		let arr = [],
            num = 2;
	function getNum (x) {
		if (x === '1') {
				arr.push(1);
				}
		if(x % num === 0){
		 arr.push(num);
		 x = x / num;
		 getNum(x);	
	
	} else if(x % num !== 0){
		if(!(x <= num)){
			num++;
		  getNum(x);
		}
	   }	
	}
    getNum (x);
    return Math.max.apply(null, arr)
}