// const isUSerloggedIn=true;
// const temp=41;

// if(temp===40){
//    console.log("less than 50")
// }
// else{
// console.log("greter than 50")}

//--<,>,<=,>=,==,!=,===,!==
//==>>(check only value )
//===>>(check both value and datatype)



//(1)intersting
//const score=200

//example--1
// if(score>100){
//     const power="fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)//ReferenceError: power is not defined


//example--2
//const score=200
// if(score>100){
//     var power="fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)//user power: fly

//note--here we used var ,so that we can acess scope element even outside to scope,becuase var has global scope 


//(2)implicit(JUST FOR KNOWLEDGE,DONT USE IT INTO CODE)
//  const balance=1000

// if(balance>500) console.log("test"),console.log("test2");//op--test,test2


//(2.1)nested loops

// if(balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }
// else if(balance<850){
//     console.log("less than 850")
// }
// else{
//     console.log("more than 900")
// }


//intersting
//used to check multiple condition

//logical operator
//and(&&)
//or(||)

// const isUSerloggedIn=true;
// const debitcrd=true;
// const loggedInFormGoogle=false;
// const loggedInFormEmail=true;



// if(isUSerloggedIn && debitcrd){
// console.log("allow to pucharse car")//both condition must be true
// }
// if (loggedInFormGoogle || loggedInFormEmail ) {
//     console.log("user logged in")//any one condition must be true
// }



//switch
//syntax--
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
//(example-1)
// const month = 3
// switch (month) {
//     case 1:
//         console.log("jan")
//         break;

//     case 2:
//         console.log("feb")
//         break;


//     case 3:
//         console.log("mar")
//     break;

//     case 4:
//         console.log("apr")
//         break;

//     default:
//         console.log("default case match")
//         break;
// }
//note--jo apde break use na karia to jya value match thase switch statement ni tyathi niche sudhi no badho code execute thai jase ,default sivay



//-->>when we have value in string

// const month = "jan"
// switch (month) {
//     case "jan":
//         console.log("jan")
//         break;

//     case "feb":
//         console.log("feb")
//         break;


//     case "mar":
//         console.log("mar")
//     break;

//     case "apr":
//         console.log("apr")
//         break;

//     default:
//         console.log("default case match")
//         break;
// }


//(EXTRA)About != and !==
//!= (AA VASTU TANE QUESTION PUCHE JO SACHO HOY TO CONDITION EXECUTE THAY OTHERWISE NA THAY)

// //1.(!=)check only value
// const price='100';

// if (price!=100) {
//     console.log('executed');
// }
// //2.(!==)check both value and datatype
// const price2='100';

// if (price2!==100) {
//     console.log(' price 2 executed');
// }




// const value=50;
// if(value!=100){
//     console.log('executed');
    
// }


// const value=50;
// if(value!==100){
//     console.log('executed');
    
// }