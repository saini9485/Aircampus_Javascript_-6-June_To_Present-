let a = parseInt(process.argv[2]);
let dig = 0;

while(a>0){
    dig = a%10
    if(dig%2==0){
        console.log(dig)
    }
    a= Math.floor(a/10)
}