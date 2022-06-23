let a = parseInt(process.argv[2])
let n = parseInt(process.argv[3])
for(let i=a;i<n;i++){
    if(i%2 != 0){
        console.log(i)
    }
}