let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let sum = 0;
for(let i=a;i<=b;i++){
    if(i%2 == 0){
        console.log(sum+i)
    }
}