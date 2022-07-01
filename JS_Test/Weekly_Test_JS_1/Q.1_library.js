// Q.1- Accept the number of days from the user and calculate 
// the charge for library according to following :

// Till five days : Rs 0/day.

// Six to ten days : Rs 3/day.

// 11 to 15 days : Rs 4/day

// After 15 days : Rs 5/day
function calculateCharge(days){
    if (days <= 5){
      charge = 0 * days;
    }
       else if (days >= 6 && days <= 10)  {
           charge = (days-5)*3
       }
     else if (days >= 11 && days <= 15) {
           charge = (days-10)*4 +(5*3)
     }
      else if (days > 15) {
           charge = ((days-15)*5)+(5*3)+(5*4)
      }
            return charge;
   }
   console.log(calculateCharge(12))
   exports.calculateCharge = calculateCharge 
   