function checkNumber(n){
    let count = 1; 
          while (count < 100 && sum n !=1){
           let sum =  0;
            while(n!=0){
              let x=n%10
              sum =sum+(x*x)
              n=Math.floor(n/10)
            }
              count++;
            n =sum;
  }
    if(n==1){
      return('CodeSpecial')
    } else{
      return ('SomethingUnusual')
    }
  }
  
  console.log(checkNumber(49))
  exports.checkNumber = checkNumber
  
  