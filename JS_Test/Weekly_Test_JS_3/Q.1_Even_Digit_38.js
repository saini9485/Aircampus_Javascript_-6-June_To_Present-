//Q.1 Take a number and return all the even
// digits of the number.

function evenDigits(n){

    //We are considering 0 as even number 
    if(n==0){
      return "0"
    }else{
      let str = "";
      let digit;
      while(n>0){
      digit = n%10;
      n = Math.floor(n/10);
      if(digit%2==0){
          str = `${digit}${str}`;
      }
    }
    return str == ""?"-1":str;
      
    }
    
   }
  
  console.log(evenDigits(1234076));
  
  exports.evenDigits = evenDigits