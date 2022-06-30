let a =0,b=1,i,j;
for(i=a;i<=5;i++){
    let stars = ''
    for(j=1;j<=i;j++){
        stars = stars+`${a} `
        let c=a+b;
        a=b;
        b=c;
    }
    console.log(stars)
}
