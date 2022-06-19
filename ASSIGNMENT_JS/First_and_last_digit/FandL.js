let a = parseInt(process.argv[2]);
let last= 0;
last= a%10
console.log(last)
let first= 0;
while(a>=10){
    first = Math.floor(a/10)
    a= a/10
}
console.log(first)