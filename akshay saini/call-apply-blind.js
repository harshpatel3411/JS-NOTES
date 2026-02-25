//1.call function(function borrowing)




"use strict";

//exampl-1.1
// let name={
//     firstname:'harsh',
//     lastname:"patel",
//     printName:function(){
//         console.log(this.firstname+" "+this.lastname);
//     }
// }
// name.printName()


// let  name2={
//     firstname:"tisha",
//     lastname:"patel",


// }

// name.printName.call(name2)


//example-1.2(HOW TO PASS PARAMETERS IN FUNCTION)

// //first parameter is the reference of object you call 
// //second parameter is the parameter if you want to pass in 

let name={
    firstname:'harsh',
    lastname:"patel",
 
}
let printName=function(hometown,city){
    console.log(this.firstname+" "+this.lastname+" from "+hometown,city);

}



printName.call(name,"piludara","mahesana")//harsh patel



// let  name2={
//     firstname:"tisha",
//     lastname:"patel",
// }

// printName.call(name2,"mahesana")//tisha patel



//2->>----------apply------------//

//NOTE--APPLY METHOD WORKS SAME AS CALL METHOD , ONLY DIFFERENCE IS WE JUST PASS PARAMETERS IN THE FORM OF ARRAY


//EXAMPL-2.1

// let name={
//     firstname:'harsh',
//     lastname:"patel",
// }
// let printName=function(hometown,city){
//     console.log(this.firstname+" "+this.lastname+" from "+hometown+" and  city "+city);

// }

// printName.apply(name,['piludara','mahesana'])




//3---->Bind --------------///

//example-3.1


// let name={
//     firstname:'harsh',
//     lastname:"patel",
 
// }
// let printFullName=function(hometown,city){
//     console.log(this.firstname+" "+this.lastname+" from "+hometown+" and  city "+city);

// }




// let printMyName=printFullName.bind(name,'piludara','mahesana')

// console.log(printMyName);//function

// printMyName()


