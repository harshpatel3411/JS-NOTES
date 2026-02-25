//<<------------------------LECTURE21----------------->>//

//example-1(for understanding)
// if(true){
//     let a=10;
// const b=20;
// var c=30;
// }


// console.log(a);//eroor
// console.log(b);//error
// console.log(c);//30




//extra--
//note--var do not follow scope rule hence we do not use it in programming
// var a=300;
// if(true){
//     var a=10;

// console.log(a)//10
// }

// console.log(a)//10


//(extra example)
// let a=300;
// if(true){
//     var a=10;

// console.log(a)//error
// }

// console.log(a)//error



//example-2
//for let understanding
let a=300;
if(true){
    let a=10;

console.log(a)//10
}

console.log(a)//300


//ex--3
// let a=300;
// if(true){
//    a=10;

// console.log(a)//10
// }

// console.log(a)//10
//(it will reassign value to a ,because we have not declared new varible for scope)//it is not possible for const




//ex-4
// const a=300;
// if(true){
//    const  a=10;

// console.log(a)//10
// }

// console.log(a)//300




//NOTE---VAR KEYWORD FUNCTION MATE COMPLETE WORK KARE(MEANS VARIABLE IS NOT ACCESSIBLE FOR SCOPE IN FUNCTION )


//<<------------------------LECTURE22----------------->>//
//example(1)

//  function one(){
// const username="harsh"

// function two(){
// const website="youtube"
// console.log(username)
// }
// console.log(website)

// two()

// }
// one()

//by using if/else
//example(2)
// if(true){
//     const username="harsh"
//     if(username==="harsh"){
//         const website=" youtube"
// console.log(username + website)//op--harsh youtube
//     }
//   console.log(website);//op--error
     
// }
//console.log(username)//op--error


//(example--3)/interesting

//example 3.1
// console.log(addOne(5))//op--6

// function addOne(num){
// return num+1
// }

//(note--jyare function declare karia tyare apde function ni pela and function ni pachi call kari sakia and output lai sakia)



//example 3.2

// console.log(addTwo(5));//op--error

// const addTwo=function(num){
//     return num+2
//     }

//     console.log(addTwo(5));//op--7
 //(note--jyare function declare karia and tene varible ma store karia and jo function ne declaration pela call karia to ae vastu error ape ,atle tene function declaration pachi call karvo)
 //error-ReferenceError: Cannot access 'addTwo' before initialization