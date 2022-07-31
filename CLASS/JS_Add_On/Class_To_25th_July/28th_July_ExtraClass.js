// let names = "Vasanthkumar"
// if(names.length>10){
//     console.log("greater")
// }else{
 //   console.log("smaller")
//find the even number to the array
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

// const clearing = setInterval (()=>{
// console.log("hello")
// },1000)

// setTimeout (()=>{
// clearInterval(clearing)
// },2000)
// //find greater 10 or not  in string 
// let names = "vasanthkumar"
// if(names.length>10){
//     console.log("yes")
// }else {
//     console.log("no")
// }
// //find sum of array  
// let arr = [1,2,3,4,5,6]
// let total = 0;
// for(index=0;index<arr.length;index++){
//     total+= arr[index]
// }
// console.log(total)
// //find even number inn array 
// let arr = [1,2,3,4,5,6]
// let even = []
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }  
// }
// console.log(even)
// merge two array and add somethings 
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]
// // let arr3 = [...arr1,...arr2]
// let arr3 = [arr1.concat(arr2, 'Rajesh')]
// console.log(arr3)
//memory creation and code execution 
// console.log(age)
// var age = 10;  //=> undefine 
// let age = 10 ; //=> error, because let and const create spread memory 
// this zode it called temporal dead zone
// var name = " vaanth" //=. it will not  execute not define anywhere
// console.log(age)  //=> undefine , 
// console.log(phone) // => error , because it will create spread memrory
// // then only here programm will be stope it will not go furture
// var age = 10;
// let phone = "123"
// console.log(phone) // => it will not execute
console.log(age) //=> undefine
console.log(fname)  //=> undefine

var fname = "vasanth"
console.log(phone) // => error
var age = 10

let phone = "123"
