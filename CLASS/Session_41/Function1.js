// 1. to find the factorial of the number
//Normal fuction 
/*function facto  (num){
    let facto = 1;
for(let  i = num; i>0; i--){
fact*=i;
}
return fact;

} let  ans = facto (5)
console.log(ans)*/
//2.IIFE Fuction 
/*let ans =(function facto  (num){
    let facto = 1;
for(let  i = num; i>0; i--){
fact*=i;
}
return fact;

})(5)
console.log(ans);*/
//arrow fuction 
/*3. let facto =(num)=>{
    let facto = 1;
for(let  i = num; i>0; i--){
   facto*=i;
}
return facto;

}
 let ans = facto(5)
console.log(ans);*/
//annoymous fuction 
( function (a,b){
    return a+b
})(5,7);
