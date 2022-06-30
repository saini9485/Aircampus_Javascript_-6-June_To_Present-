let num =5;
let i,j;
for(i=1;i<=num;i++){
    stars =''
    for(j=1;j<=num;j++){
        if(i==j||i+j==num+1){
            stars += '*'
        }else{
            stars += ' '
        }
    }
    console.log(stars)
}