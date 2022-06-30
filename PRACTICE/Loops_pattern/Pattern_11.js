let i,j,k,l,num=5;
for(i=1;i<=num;i++){
    stars = ''
    for(k=1;k<=num-i;k++){
        stars +=' '
    }
    for(j=1;j<=i;j++){
        stars += '*'
    }
    for(k=2;k<=i;k++){
        stars +='*'
    }
    console.log(stars)
}
