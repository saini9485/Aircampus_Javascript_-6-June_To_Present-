//after 9.20pm
// let nums =[1, '',false,true,'vasanth',null,undefine,0,-1]

// let truevalues = nums.filter

let nums = [1,2,3,4,5]
// let sum = nums.reduce(function(prev,current){
//     return prev + current
// }
// )
// console.log(sum ) 
//i want to chech all the number greater than 5 print true or false
// let initial = true;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]>5)initial = true
// }
// console.log(initial)
console.log(nums.every((num)=>{
    return num <=5
}))

