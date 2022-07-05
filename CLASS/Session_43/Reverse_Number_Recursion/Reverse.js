function reverse(num1,num2){
    if(num1<=num2){
    console.log(num2)
    return reverse(num1,num2-1)
}
}
reverse(1,15)