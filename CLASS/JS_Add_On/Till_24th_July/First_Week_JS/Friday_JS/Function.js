console.log('initial');

function longer(){
    console.log('third');
}
setTimeout(function(){
    console.log('first')
},3000)
setTimeout(function(){
    console.log('vansanth')
},0)
console.log('second');