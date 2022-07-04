//print pattern

let num = 6;
let i,j;
for(i=1;i<num;i++){
  let count = '';
  for(j=1;j<=i;j++){
     //let count = 0;
    if((i+j) %2==0){
      count +=1;
    } else {
       count +=0;
    }
  }
  console.log(count)
}