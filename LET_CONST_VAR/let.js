//  let follow the rule of block scope

// you can declare variable with the same name using let 

let a=20;

// if(true){
//     let a=30;
//     console.log(a);
    
// }

// reassignment 

if(true){
    a=30;
    console.log(a);
}

console.log(a);
