/*let num = 49
let sum = 0
while(num !=0){
    let rem = num%10;
    sum  += rem**2
    num = Math.floor(num/10)
}
console.log(sum)*/
/*function sumofSquare(){ //1. function declation and defition
    let sum = 0
    while(num != 0){
        let rem = num%10;
        sum  += rem**2
       let num = Math.floor(num/10)
    } 
}    
let ans = sumofSquare(49)
console.log(ans)*/
//2. Arrow Function         //1. let/const
/*let  sumofSquare=>() {  //arrow function is used ES6-(latest version of javascript)
    let sum = 0            //ES5-no arrow function 
    while(num != 0){
        let rem = num%10;
        sum  += rem**2
       let num = Math.floor(num/10)
    } 
}
let ans = sumofSquare(49)
console.log(ans)*/
//3.IIFE-immedialty invoked function expression 
// automatic call 
 let ans = (function sumofSquare(){ //
    let sum = 0           
    while(num != 0){
        let rem = num%10;
        sum  += rem**2
       let num = Math.floor(num/10)
    } 
  return   
})(49);
console.log(ans)
