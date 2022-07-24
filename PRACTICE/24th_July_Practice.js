//operator :-
//1. Airthmatic operator 
//+,-,/,*,++,-- 
//2. Assissment operator
// +=,-=,*=,-= 
// let a = 20 ;
// let b = 30 ;
// let c = 20 ;
// let d = 30 ;
//a+= 30;
//a+= a+20
//console.log(a) 
//3.comparison operator
//==,===,!=,!==,>,<,>=,<=
//4.logical operator 
//&&,||,!
//&&  both value should be correct 
//|| minimum one value should be correct
// if(a==c||b==a){
//     result = "yes"
// }else{
//     result = "no"
// }
// console.log(result)
//5. Ternary operator
//(a==b?yes:no)
//conditional statement=>
//if else 
//switch case
// if(a%2==0){
//     result= "even"
// }if else(a%!==0) {
//     result = "odd"
// }else {
    //result = " negative"
//}
// console.log(result)
//Loops=> repeataion
//1.for loop
//2.while loop
//3. do while loop
//* of loop 
//* in loop 
//1. for loop
// for(let i = 0;i<5;i++){
//     console.log(i)
// }
//2. while loop
// let i =0;
//   while(i<=5);{
//     console.log(i)
// i++
//   }
//Function=>
//1. Normal Function
// function greet(a,b){
//     //statement 
//     sum = a+b
//     console.log(sum)
// }
//  return greet(2,4)
//Rest Operator
// function shoppingCard(...prices) {
//     //console.log(prices)
//     let total = 0;
//     for (i = 0; i < prices.length; i++) {
//       total += prices[i]
//     }
//     return total;
//   }
  
//   console.log(shoppingCard(100, 100, 200))
//function expression 
// let printing = function (){
//     console.log("hello")
// }
// printing();
// //Array Destructuring
// let array = [1,2,3,4,5,6,7]
// return (num1,num2)=array
// console.log(num1,num2)
//function
// function myFunction(p1, p2) {
//     return p1 * p2; 
//   }
//   console.log(myFunction(2,3))//output=>6
// let myFunction=(p1, p2) =>{
//     return p1 * p2; 
//   }
//   console.log(myFunction(2,5))// output =>  10
  //IIFE Function
  // exports.basicArithmetic = basicArithmetic;
// let sum = (function(a, b) {
//     return a + b;
// });
// console.log(sum(2,4))//output => 6
//Anonymous Function
// let show = function () {
//     console.log('Anonymous function');
// };
// let add = function (a, b) {
//     return a + b;
// };
// console.log(add(2,4))//6
//HOF 
 // prints 1; 2; 3;
//  function log(item) {
//     return console.log(item);
// }

// function process(data) {
//     for (let i = 0; i < data.length; i += 1) {
//         data[i];
//     }
//   return data
// }

// console.log(process([1, 2, 3])); // prints 1; 2; 3;
// const numbers = [1, 2, 3];
// numbers
//  .map((n) => n * 2) // it will return [2, 4, 6]
//  .filter((n) => n % 4) // it will filter out number that divides by 4
//  .reduce((a, b) => a + b); // return 6 - sum of the array items
// function incr(num, pad) {
//     return num + pad;
//   }
  
//   // Decrement the number by another number
//   function decr(num, pad) {
//     return num - pad;
//   }
//   console.log(incr(2,6))//8
//FirstClassFunction
// const Arithmetics = {
//     add: (a, b) => {
//         return `${a} + ${b} = ${a + b}`;
//     },
//     subtract: (a, b) => {
//         return `${a} - ${b} = ${a - b}`
//     },
//     multiply: (a, b) => {
//         return `${a} * ${b} = ${a * b}`
//     },
//     division: (a, b) => {
//         if (b != 0) return `${a} / ${b} = ${a / b}`;
//         return `Cannot Divide by Zero!!!`;
//     }

// }
// console.log(Arithmetics.add(2,4))
//Recursion
// function recurse() {
//     if(condition) {
//         recurse();
//     }
//     else {
//         // stop calling recurse()
//     }
// }

// recurse();
// function power (base,exponential) 
// {
//    if (exponential== 0) 
//    {
//     return 1;
//     }
//   else 
//   {
//     return base * power(base, exponential-1);
//   }
// };

// console.log(power(4, 2));//16
// //print arr in Reverse order
// function reverse(arr){
//     // let arr = [1,2,3,4,5,6,7]
//     //console.log(arr)
//     let newArr =  [];
//     for(i=arr.length-1;i>=0;i--){
//       newArr = newArr+arr[i]
//     }
//     return newArr;
//     }
//     console.log(reverse([1,2,3,4,5,6,7]))//7654321
//find length number in array
// function length (nums){
// //let nums = [1,20,32,47,58,96,23]
//   max= nums.length
//   return max
// }
// console.log(length([1,20,32,47,58,96,23]))//7
 // find the maximum values of array
// let nums = [1,20,32,47,58,96,23]
// let max = 0;
// for(let i=0;i<nums.length;i++){
//     if(max<nums[i]){
//         max = nums[i]
//     }
// }
// console.log(max)//96
//find the minimum values of array
let nums = [1,20,32,47,58,96,23]
let min =nums [0];
for(let i=1;i<nums.length;i++){
    if(min>nums[i]){
        min = nums[i]
    }
}
console.log(min)
