for(let i=1;i<=3;i++){
    let stars=" "
    for(let space=1;space<=3-i;space++){
        stars=stars+" "
    }
    let k=i
    for(j=1;j<=i;j++){
        stars=stars+k++
    }
     k=k-2;
    for(let j=1;j<i;j++){
        stars=stars+k--
    }
    console.log(stars)
}
for(let i=3-1;i>=1;i--){
    let stars=" "
    for(let space=1;space<=3-i;space++){
        stars=stars+" "
    }
    let k=i
    for(j=1;j<=i;j++){
        stars=stars+k++
    }
     k=k-2;
    for(let j=1;j<i;j++){
        stars=stars+k--
    }
    console.log(stars)
}