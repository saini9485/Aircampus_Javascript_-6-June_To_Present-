//push - insert last
// pop - remove the last
//unshift - insert the first
//shift - remove first 
//let names = ['vasanth','kumar','sagakara','dravid']
//console.log(names.slice(0,2))=>
//console.log(names.length);
//console.log(names,sliceNames);=>
// console.log(names.splice(0,2))
// console.log(names[0],names[1],names[2],[3]);
//console.log(names.slice(0,2))
// console.log(names.slice(2,-1)); 
// console.log(names.slice(-4,3));
// console.log(names.slice(2));
// console.log(names.slice(-2));
//    function findName(name){
//    for(let i=0;i<names.length;i++){
//     if(names[i]== 'sangkara')
//      return true;
//    }
//    return false
// }
// console.log(findName('sachin'));
//console.log(names.includes('sachin'))
//console.log(names.includes('kumar' ,0))
// interview question:-
//1.print first non repeating number
// let nums = [1,3,4,4,2,5,7,1,3] //Very imporant question 
// for(let i=0;i<nums.length;i++){
//     let value = nums[i]
//     if(nums.includes(value,i+1)===false){
//         console.log(value);
//         break
//     } else{
//         nums.shift()
//     }
    
// }
//let names = ['vasanth','kumar','sangakara','kumar']
//console.log(names.indexOf('kumar',2));
// let names = ['vasanth','sangakara','dravid','kumar']
// names.reverse()
// console.log(names);
// let nums = [3,2,6,9]
// console.log(nums.sort())//single digit sorting this way
let nums = [3,2,6,4,9,21,12,39]
console.log(nums.sort(function(a,b){ //multiple digit sorting 
    return a-b;   //accending order sorting (a-b)
}));              // deccending order sorting (b-a)
// console.log("1"+"1")
// console.log(1+"1")
// console.log("1"-"1")
// console.log(1-"1")
