let num = 5;
let count =1;
for(let i=1;i<=num;i++){
let stars = ''
for(let j=1;j<=i;j++){
    stars = `${stars} ${count}`;
    count++;
}
console.log(stars)
}