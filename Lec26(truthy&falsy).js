//example(1)(when we have some value into string--thruthy)
// const userEmail="h@32.gmail.com"

// if (userEmail) {
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email");

// }//op--got user email



//example(2)(when we have empty string---falsy)
// const userEmail=""

// if (userEmail) {
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email");

// }//op--dont have user email



//example(3)(when we have empty array---truthy)
// const userEmail=[]

// if (userEmail) {
//     console.log("got user email")
// }
// else{
//     console.log("dont have user email");

// }//op--got user email


//<---------RULES FOR THRUTHY & FALSY VALUES----------->//

//falsy values--false,0,-0,BIGInt 0n,"",null,undefined,NaN
//thruthy vales--[],"0","false"," ",{},function(){},
//note-->>(definetly empty string is falsy ,but when add some value in it ,it becomes thruty ,even if you add space in it -it  will become thruty value)




//example(to check array is empty or not)
// const userEmail=[]
// if (userEmail.length===0) {
//     console.log("array is empty");
// }//array is empty


//(to check obejct is empty or not)
// const emptyobj={}

// if (Object.keys(emptyobj).length===0) {
//     console.log("object is empty")
// }

//(JUST FOR KNOWLEDGE)
// console.log(false==0);//true
// console.log(false=='');//true
// console.log(0=='');//true


//-->>>>>NULLISH COALESCING OPERATOR(??):null , undefined
// let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15


// console.log(val1);//5
// console.log(val1);//10
// console.log(val1);//15

// val1=null ?? 10 ?? 20

// console.log(val1);//10


// val=null??undefined
// console.log(val);//undefined(jyare peli value khoti hoy tyare biji value assign thay)

// val=undefined??null
// console.log(val);//null(jyare peli value khoti hoy tyare biji value assign thay)





//terniary operator(?)
 
//synatx--condition ? true : false

// const iceTeaPrice=100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

