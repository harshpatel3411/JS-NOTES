const coding=['js','ruby','java','cpp','python']

//here function is call back function so we do not need to write function name
//IMP==>>forEach never return anything


//1.using simple function
// coding.forEach( function (element){
//     console.log(element);
    
// })

//2.using arrow function
// coding.forEach((element)=>{
//     console.log(element);
    // 
// })


//3.pass paramters
function printB(item){
    console.log(item)
}
coding.forEach(printB)//just give reference ,dont execute it


//intersting(foreach always comes with three properties--elements,its index,and main array)
// coding.forEach((element,index,arr)=>{
//     console.log(element,index,arr)
// })

//very important
// const mycoding=[
// {
//    languageName:"javascript",
//    languagefile:"js"
// },
// {
//     languageName:"java",
//     languagefile:"java"
// },
// {
//     languageName:"python",
//     languagefile:"py"
// },

// ]


//using for each
// mycoding.forEach((element)=>{

 
    // console.log(element.languageName
    // );
    
// })



//extra- outof video

//---------TO ACCESS LANGUAGE NAME FROM ABOVE ARRAY OF OBJECT USING THREE LOOP(THIS CONCEPT IS VIDEO OF LOOP)
//---1.USING FOR OF
// for (const element of mycoding) {
//     console.log(element.languageName);
    
// }



//---2.USING FOR EACH
// mycoding.forEach(element => {
//     console.log(element.languageName)
// });



//----3.USING FOR IN
// for (const element in mycoding) {
//     console.log(mycoding[element].languageName);
    
//     }





//outside of video
//other method to access elements
//    console.log( mycoding.languageName)
// console.log(mycoding[2].languageName); // Outputs "javascript"

// for (let i = 0; i < mycoding.length; i++) {
//     console.log(mycoding[i].languageName);
// }



//to access perticular element

// const targetlanguage='python';

// for (let index = 0; index < mycoding.length; index++) {
//    if (mycoding[index].languageName===targetlanguage) {
//     console.log(mycoding[index].languageName)
//    }
// }
