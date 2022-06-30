// var i,j,k,l;
// for(i=1;i<=5;i++){
// stars = ''
// for(k=1;k<=5-i;k++){
//   stars += ' '
// }
// for(j=1;j<=i;j++){
//   stars +='*';
// }
// for(l=2;l<=i;l++){
//   stars += '*'
// }
// console.log(stars)
// }

// var i,j,k,l;
// for(i=4;i>=1;i--){
// stars = ''
// for(j=1;j<=5-i;j++){
//   stars += ' '
// }
// for(k=1;k<=i;k++){
//   stars +='*';
// }
// for(l=1;l<=i-1;l++){
//   stars += '*'
// }
// console.log(stars)
// }
let i,j,k,num=3;
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