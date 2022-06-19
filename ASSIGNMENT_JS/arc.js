let a = parseInt(process.argv[2])
let temp = a;
let sum = 0;
let dig = 0
while(temp>0){
    dig = temp%10;
    sum = (dig**3)+sum
    temp= Math.floor(temp/10);
}

if(sum==a ){
    console.log("The number is an armstrong number")
}
else{
    console.log("The number is not an armstrong number")
}