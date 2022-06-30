var i,j,k,num=3;
for(i=1;i<=num;i++){
  stars =''
  for(j=num;j>i;j--){
    stars +=' '
  }
  for(k=0;k<i*2-1;k++){
    if(k===0||k===2*i-2){
      stars +='*'
    }
    else{
      stars += ' '
    }
  }
  console.log(stars)
}
var i,j,k,num=3;
for(i=num;i>=1;i--){
  stars =''
  for(j=num;j>i;j--){
    stars +=' '
  }
  for(k=0;k<i*2-1;k++){
    if(k===0||k===2*i-2){
      stars +='*'
    }
    else{
      stars += ' '
    }
  }
  console.log(stars)
}