let a = parseInt(process.argv[2])
let temp =a;
let dig = 10;
let  reverse =0
while(temp>0){ 
    reverse = (reverse*10)+(temp%10)
    temp= Math.floor(temp/10)
}
// console.log(reverse)
if(reverse == a){
    console.log("This number is a palindrome number")
}else{
    console.log("This number is not a palindrome number")
}