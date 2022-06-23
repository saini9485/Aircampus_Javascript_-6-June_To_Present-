//higher order function //We will be use in callback
function b(x,y){
    return x+y;

}
function a(b){
    return b(6,7);
}
console.log(a(b));