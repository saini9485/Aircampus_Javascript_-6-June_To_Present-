//Q.1 Take a number and return all the even
// digits of the number.
function EvenDigit(n){
while(n!=0){
let num = n%10;
if(num%2==0){
    console.log(num)
}
n=Math.floor(n/10)
}
}
console.log(EvenDigit(123649))