//syntax
// function name() {
    
// }
//sample example
// function example() {
//     console.log('h')
//     console.log('a')
//     console.log('r')
//     console.log('s')
//     console.log('h')
// }
// example()


//sum of two number
// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }
// addTwoNumber(3,null)//3
// addTwoNumber(3,"4")//34
// addTwoNumber(3,"")//3
// addTwoNumber(3,undefined)//NaN
// addTwoNumber(3,4)//7
// console.log(addTwoNumber(3,4))//7 and undefined


//example1
// function addTwoNumber(number1,number2){
    
//   let result=number1+number2 
//    return result

    //<--OR-->//

    // return number1+number2

// }
// const result=addTwoNumber(3,4)
// console.log(result);//op--7


//example 2
// function addTwoNumber(number1,number2){

// console.log(number1+number2)

//     }
//     const result=addTwoNumber(3,4)//op--7
    // console.log("result:",result);//op--undefinded

//notee---jyare apde return lakhia tyare aapne tene koi variable ma store kari sakia ,otherwise aena sivay na kari sakia and return karya vagar jyare aapne value ne store karavi and console.log thi (like ex-2) print karia tyare hamesha output ma undefined j aapse..



//methods to pass parameters
//m1
// function loginuserMessage(usermessage){
//     if(usermessage === undefined){
// console.log("please enter a username")
// return
//     }
//     return `${usermessage}just loggeed in`
// }
// console.log(loginuserMessage("hitesh"))//hiteshjust loggeed in
// console.log(loginuserMessage(""))//just loggeed in
 //console.log(loginuserMessage())//please enter a username and undefined
//NOTE--INTERVIEW->JYARE KOI PAN PARAMETER PASS NA KARIA FUNCTION MATE TYARE TE UNDEFINED RETURN KARE JYARE APDE EXECUTE KARIA TYARE, JO TU AENE RETURN KARAVE TO LIKE THIS--  return `${usermessage}just loggeed in`
//EMPTY AND UNDEFINED CONSIDERD AS FALSE VALUE IN JS


 //more accurate way


//  function loginuserMessage(usermessage = "you "){
//     if(usermessage === undefined){
// console.log("please enter a username")
// return
//     }
//     return `${usermessage}just loggeed in`
// }

//  console.log(loginuserMessage(''))
//  console.log(undefined=='');(in short  empty string is considered as false value but it is not undefined)
 


//other way to dispaly undefinded in if
// function loginuserMessage(usermessage){
//     if(!usermessage)//(usermessage === undefined)//note --javascript ma empty value ne wrong ganava ma ave che atle ahi apde ! use karyu atle if condition true bani gai and execute thai gai
//     {
// console.log("please enter a username")
// return
//     }
//     return `${usermessage}just loggeed in`
// }
//  console.log(loginuserMessage())



//note--jyare ahi hu harsh pass karis tyare "you" replace thai jase harsh sathe(override)

//  function loginuserMessage(usermessage='you'){
//     if(!usermessage)//(usermessage === undefined)//note --javascript ma empty value ne wrong ganava ma ave che atle ahi apde ! use karyu atle if condition true bani gai and execute thai gai
//     {
// console.log("please enter a username")
// return
//     }
//     return `${usermessage} just loggeed in`
// }
//  console.log(loginuserMessage('   '))//    just loggeed in(empty string with space)
// console.log(loginuserMessage())//you just loggeed in
// console.log(loginuserMessage(''));//please enter a username and undefined (empty string without space)

