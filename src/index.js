module.exports = function getZerosCount(number, base) {
  
  

    var zerosCount = 0;

    var num = base;

    var mainNum = 0;




for (var i = 0; i < num ; i++) {
    
    if (num == 10) {
        mainNum = 5;
    }
    
    else if (i > 0 && num % i == 0) {
    
    var a = Math.floor(num / i),
        b = Math.floor(num / 7);
    
    
    if (a * i == num && i > b) {
        mainNum = i;
       break;
      
    }
    }
    
}


if (mainNum > 5) {
    mainNum = mainNum;
} else {mainNum = 5;}



    while (number > 0) {
        number = Math.floor(number/mainNum);
        
    zerosCount += number;
        

    }
    
    return zerosCount;


}