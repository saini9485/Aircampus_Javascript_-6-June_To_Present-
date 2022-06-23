//calling the same function by itself 
/*function x(num){
    console.log("hello world -" +num)
    if (num<10)
    return x(num+1)
}
x(0)*/
/*let num =5
let fact =1;
for(let i=num; i>0;i--){
    fact*=i;
}
console.log(fact)*/
/*function fact(num){
 for(let i =num; i>0; i--){
    fact*= i;
 }
 return facto;
}
fact(5)
function x(){
    console.log("hello")
    return x()
}
x() */
/*function y(num){
    if(num>0){

        console.log(num)
      return y(num-1)
}}
y(5) */
function y(num, fact){

    if(num>0){
        fact = fact*num;
        return y(num-1,fact);
    }
    return fact;
}
console.log(y(5,1));
