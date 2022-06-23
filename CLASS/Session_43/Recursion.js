//Fibonacci serise
/*function  fibo(first,second,counter){
    if (counter<=10){   //when we take <= 1->10=>10
   // console.log(first)

    let c = first+second
    //first=second
    return fibo(second,c,counter+1)
}
console.log(first)
}

fibo(1,1,1)*/
//1. print all the numbers between the given range
//let num = (parseInt(process.argv[2]))
  /*function range(x,y){
    console.log(x)
    while(x< y){
        return  range(x + 1,y);
    }
}
range(1 , 50);*/
//3.  a number n, print numbers from n to 1 using recursion.
/*function reverse(num1,num2){
    if(num1<=num2){
        console.log(num2)
        return reverse(num1,num2-1)
    }
}
reverse(1 , 20)*/

//print n number of fibonacii seriese using recursion

// program to display fibonacci sequence using recursion
/*function fibonacci(n) {
    if (n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

console.log(fibonacci(7));*/
//5. Given an array of integers, print the elements using recursion.
/*var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
  };
  
  console.log(array_sum([1,2,3,4,5,6]));*/
  /*function rangeOfNumbers(Num1, Num2) {
    if(Num1 == Num2){
        return [Num1];
    }
    const myArray = rangeOfNumbers(Num1, Num2 - 1);
    myArray.push(Num2);
    return myArray;
  };
  console.log(rangeOfNumbers(1,20))*/
  //find the smallest number in given range 
  function recur(arr, smallest){
    if (arr.length === 0){
        return smallest;
    }
    else {
        //var first = arr.shift();
        if (first < smallest || smallest === undefined){
            smallest = first;
        }

        return recur(arr, smallest);
    }
}
console.log(recur( 2,5,6,8,4,))
  