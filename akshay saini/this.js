
'use strict'
// console.log(this)
// //1.just testing
// function test() {
//     console.log(this);
// }
//   test(); 
  
//2.arrow
// const arrowFun={
//     a:10,
//     x:function () {
//         const y=()=>{
//             console.log(this);
            
//         }
//         y()
//     }
// }
// arrowFun.x()

// const arr={
//     a:10,
//     x:()=> {
//         console.log(this)
//     }
// }
// arr.x()

// 3.strict/non-strict

//function one(){

//     //     // the value depends on strict mode / non-strict mode
//              console.log(this);
             
//          }
//          one()