//5. Given an array of integers, print the elements using recursion.
function rangeOfNumbers(Num1, Num2) {
    if(Num1 == Num2){
        return [Num1];
    }
    const Array = rangeOfNumbers(Num1, Num2 - 1);
    Array.push(Num2);
    return Array;
  };
  console.log(rangeOfNumbers(1,20))