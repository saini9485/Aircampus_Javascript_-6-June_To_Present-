let a = parseInt(process.argv[2])
let n = parseInt(process.argv[3])
let first =0
let second =0
let product =1

for (let i=a; i<=n;i++){
    let temp = i
    if(i>=10){
        temp= Math.floor(temp/10)
        second = temp%10
        if(i%2==0 && second ==4){
           product =product*i
            }
    }

}if(product>1){
    console.log(product)
}
else{
    console.log("The number doesn't satisfy the conditions")
}