//IIFE => immideatly invoked function expression it will call automatically 
// suppose that it is my normal function 
// function add (){
//     console.log("adding")
// } add() //=> we will have to call without calling it will not print 
// this is my IIFE function 
(function (){
    console.log("adding")
}) ()


//this keyword
// function keyword (){
//     console.log(this)
// } keyword()     //=> it will return global object 
// let obj =  {
//     name:Rajesh,
//     age:20,
//     lacation:india
   
// }
// console.log(this)
