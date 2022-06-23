//Find the smallest element in the given array using recursion
function recur(arr, smallest){
    if (arr.length === 0){
        return smallest;
    }
    else {
        var first = arr.shift();
        if (first < smallest || smallest === undefined){
            smallest = first;
        }

        return recur(arr, smallest);
    }
}
console.log(recur( 2,5,6,8,4,)) 
 