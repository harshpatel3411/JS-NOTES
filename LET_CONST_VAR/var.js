// dont use var in the code as it does not follow rule of scoping
//Var is function scoped means it just follow rule of scope inside function only
// If you feel confused in last 2-3 examples watch->https://youtu.be/Fnlnw8uY6jo?si=fKXXSupFrrvdpF-T

// var a=10;
// console.log(a)//10
// if (true) {
//     var a=20;
//     console.log(a);//20
// }

// console.log(a);//20
/*1. Here it works like when you declare something with var and redeclare it again with same name javascript will treat it as Assignment 
2.when you declare something with var it will be available globally(means it is always delared outside scope)
*/



// Example -2

// console.log(a);//undefined
// if (true) {
//     var a=10;
//     console.log(a);
// }




// Example -3(Work well with functions)

// var num=20;

// function n(){
//     var num=10;
//     console.log(num);

// }
// n();

//   console.log(num);



// Example -4

// const num = 10;
// if (true) {
//     var num = 10;
//     console.log(num);//Error because when it is hosted with var 
    /* 
    
    // Hoisting pulls var num up
var num;  // <--- clashes with const num

const num = 10;

num = 10; // inside if block, but it's the same variable
console.log(num);

    
    */
// }






// Example-5

// getName();
// console.log(x);
// console.log(getName)
// var x=7;

// function getName(){
//     console.log("HELLO ");
// }




// Example-7

console.log(x);
// console.log(fun);
console.log(fun2);

var x=7;
// const fun=()=>{
// console.log("HELLO ")
// }

var fun2=()=>{
console.log("HELLO ")
}




// function val2(){
// console.log("HELLO");

// }

