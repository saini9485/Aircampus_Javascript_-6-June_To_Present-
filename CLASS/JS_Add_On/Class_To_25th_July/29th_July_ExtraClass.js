//IIFE => immideatly invoked function expression it will call automatically 
// suppose that it is my normal function 
// function add (){
//     console.log("adding")
// } add() //=> we will have to call without calling it will not print 

// this is my IIFE function 
// (function (){
//     console.log("adding")
// }) ()

//this keyword
// function declaration (){
//     console.log(this)
// } keyword()     //=> it will return global object 

// const expression = function (){
//     console.log(this)
// } 
// expression()        //=> it will also print global object 
//because it is normal function without object
// let obj =  {
//     add (){
//         console.log(this)
//     }
// }
// obj.add() //=> it will print object because it is inside object
//
// let obj =  {
//     add: function(){
//         console.log(this)
//     }
// }
// obj.add() //=>it will print also object 
// let obj =  {
//     add: function(){
//         function Rajesh (){
//             console.log(this)
//         }
//         Rajesh() 
//     }
// }
// obj.add() //=> it will print global object because this function is 
//inside the function there function is 'add function ' and grand parent is ' obj' 

// function add (){
//     console.log(this)
// } 
// add() //=> it will print global object but it is wast of memory if
//i don't want print global object i want print only empty object then 
//we can use arrow function then it will only empty object
// const add = ()=>{
//     console.log(this)
// } 
// add()  //=> it will print empty object 
// but if you don't want use arrow then you can 'new' keyword in 
//normal function 
// function add (){
//     console.log(this)
// }
// new add() //=> it will also print empty object 
//this new key is converting normal function as a arrow function 
// array destructuring 
// let arr = [1,2,3,4,5,6,7]
// let [num1,num2] =arr
// console.log(num1,num2)

// //object destructuring
// let obj = {
//     name: "Rajesh",
//     age : 21,
//     location:"india",
// }
// let {name,age,location} =obj
// console.log(name,age,location)
// add new element in array
//add '6' b/t 2 ... 3 
// let arr = [1,2,3,4,5]

// arr.splice(2,0,6)
// console.log(arr)
// find value and key in object 
let obj = {
    name: "Rajesh",
    age: 21,
    location:"india"
}
for(let key in obj){
    console.log(key, obj[key])
}



