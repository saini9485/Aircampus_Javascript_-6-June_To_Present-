// let names = "Vasanthkumar"

// if(names.length>10){
//     console.log("greater")
// }else{
//find the even number to the array
//     console.log("smaller")
// let arr = [10,2,3,4,1,7,8]
//  let even = arr.filter(number=>{
//     return number%2==0;
//  });
//  console.log(even)
//function declaration and function expression
// function declaration (){
//     console.log("declaration")
// } declaration()     => declaration

// const expression = function  (){
//     console.log("expression")
// }
//  expression() => expression

// declaration()
// expression()
// function declaration(){
//     console.log('decralation')          //=> declaration
// }

// const expression = function (){
//     console.log("expression")           //=> error
// }
// add ()
// function add (){
//     console.log("adding")       //=> adding
// }
// setTimeout (() => {
//  console.log("Rajesh")
// },0) 

// sub ()
// const sub = function (){
//     console.log("subtracting")              //=>error
// }

// setTimeout (() =>{
// console.log("virendra")      //=>code here will stop because first is error

// },2000)

// setTimeout (()=>{
// console.log("Mithun")
// },2000)

// add ()
// function add (){
//     console.log("adding")       //=> adding
// }
// setTimeout (() => {
//  console.log("Rajesh")
// },0) 


// const sub = function (){
//     console.log("subtracting")              //=>subtracting
// }
// sub ()
// setTimeout (() =>{
// console.log("virendra")      //=> virendra
 
// },2000)

// setTimeout (()=>{
// console.log("Mithun")           //=> Mithun
// },20000)

const clearing = setInterval (()=>{
console.log("hello")
},1000)

setTimeout (()=>{
clearInterval(clearing)
},2000)
