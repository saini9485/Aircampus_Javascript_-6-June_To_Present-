//Take an integer and print 'aircampus' 
//if the input integer is an Aircampus number, otherwise print 'no'.

function aircampus(n){
    let original = n, count = 0, sum = 0;
    // Calculate the number of digits
    while(n>0){
      n = Math.floor(n/10);
      count++;
    }
    console.log(n);
    n= original; // After running the first loop n will become 0 so we are restoring it to original number
    while(n > 0) {
      let digit = n % 10;
      n = Math.floor(n/10);
      sum += digit ** count;
      
    }
    console.log(n);
    return original === sum ? 'aircampus':'no' ;
  }
  
   console.log(aircampus(123));
   exports.aircampus = aircampus