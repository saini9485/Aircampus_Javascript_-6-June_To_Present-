//find the good is present or not in given string 
// let news = "vasanth is a good teacher";
//  if(news.includes ("good")){
//     console.log("yes") 
// }else {
//     console.log("no") 
// }
//find on 5th number n is present or not in given string 
// let news = "vasanth is a good teacher";
//  if(news[4]=="n"){
//     console.log("yes") 
// }else {
//     console.log("no") 
// }
//javascript is single threaded language
// single threaded means it will read line by line 
//multi threaded means it will read more than one line in one time 

//operator 
//1. "+" operator
// console.log(10+20)//30
// console.log("10"+20)//1020//beacouse plus be use for string add
// console.log(10+"20")//1020 //it will different only + operator
// console.log("10"+"20")//1020
// console.log("hello"+20)//hello20
//2."-" operator
// console.log(20-10)//10
// console.log("20"-10)//10
// console.log("20"-"10")//10
// console.log(20-"hello")//NaN
// console.log("hello"-"10")//NaN
//3."*" operator
// console.log(20*10)//200
// console.log("20"*10)//200
// console.log("20"*"10")//200
// console.log("hello"*10)//NaN
//console.log(hello*10)//error
//4. "/" operator
// console.log(20/10)//2
// console.log("20"/10)//2
// console.log(20/"10")//2
// console.log("20"/"10")//2
// console.log("hello"/10)//NaN
// console.log("Hello"/"10")//NaN
// console.log("Hello"/"hello")//NaN
//5. "!" operator
//falsy value
//false , 0 , "",NaN, null, undefine
// console.log(0)//0
// console.log(!0)//True
// console.log(!!0)//false
// console.log(0)//
// console.log("")// empty
// console.log(!"") //True
// console.log(!!"") //false
// console.log(!NaN) //True
// console.log(!!NaN) //false
// console.log(!null) //True
// console.log(!!null) //false
// console.log(!undefine) //true
// console.log(!!undefine) //false
//6. "||" operator
/* ||(or) operator first it will be check first condition if first 
condition will be true then then print first value , if first condition will be 
false then check second condition if second condition will be true then print second value
, if both condition will be false then print second value 
Example:- console.log(220||"hello") => 220 this condition is true that's why it is printing 220,
console.log(false||220) => 220 here first condition is false that's again it is printing 220 ,
*/ 
// console.log(220||"hello")//220
// console.log("hello"||220) // hello 
// console.log("hello"||"hello") // hello
// console.log(false||"hello") // hello
// console.log(false||0) // 0
// console.log(false||200) // 200
// console.log(false||null) // null
// console.log(undefine||200) // 200
// console.log(null||200) // 200
//"&&" operator
/*&&(and) operator be both value if first condition will be true and second 
condition will be also true then it will be second value 
Example:-console.log(200&&"hello") => hello , because it will check both condition 
 in every condition it will return second*/
// console.log(200&&"hello")//hello
// console.log("hello"&&200)//200
// console.log("Hello1"&&"hello2")//hello2
// console.log("Hello1"&&false)//false
// Variable :-
//what is variable 
//variable is a container where we store the value
//1.var :-we can reassign and redeclear the value
//2. let :- we can reassign value but can not redeclear value
//3. const :- we can not reassign and can not redeclear value both
//why it is called variable :-
//because this value be vary
//what is datatype;-
//there are two datatype 
//1.primitive datatype
//a.number => 1,2,3
//b.String => "hello"
//c.boolean  => true or false
//d.Undefine => let a;
//c.Symbols  => let value = symbol('hello')
//d.null  => let a = null;
//2.non primitive or reference data type
//a.function => function (){}
//b.String   => "hello"
//c.array  => [1,2,3]
//d.Object  {}
//if, else, else if statement 
//print greets according to time 
//given time,
//1. time > 1 & time<12 => Good morning,
//2. time>12 & time <15 => good afternoon
//3. time > 15 & time <18 => good evening,
//4. time > 18 => good night 
// let time = 14;
// if(time >1  &&  time< 12){
//     console.log("good morning")
// } else  if(time >12  &&  time< 15){
//     console.log("good afternoon")
// } else if(time >15  &&  time< 18){
//     console.log("good evening")
// } else {
//     console.log("good night")
// }





