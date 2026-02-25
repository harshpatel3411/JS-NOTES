
//NOTE--then is used to get value from promise and catch is used to display error if arrive from promise
//jo promise koi value return kare to then ma jase and jo promise value nai ape to ae catch ma jase

//resolve - it is directly connected with then , resolve send value to then 
//reject- it is connected with catch, reject sends error arrives  in promise to catch
//finally- it executes every time in both case , does not matter eroor arrives or not and does not matter data arrive or not

//Example--1

// const promiseOne=new Promise(function (resolve,reject) {
//     //do an async task
//     //db calls,cryptography,network

//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     },1000)


// })

// promiseOne.then(function () {
//     console.log('promise consumed');

// })




  //  //Example--2

// new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log('Async task 2');
//         resolve()
//     },1000)

// }).then(function () {
//     console.log('Async two resolved');

// })


//example-3
// const promiseThree=new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         resolve({username:"harsh patel",email:"harsh@gmail.com"})


//     },1000)
// })

// console.log(promiseThree);

// promiseThree.then(function(user){
//     console.log(user);//{username:"harsh patel",email:"harsh@gmail.com"}

//     console.log(user.username);//harsh patel

// })






//example-4

// const promiseFour=new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         let error=true;
//         if (!error) {
//             resolve({username:'harsh',pass:'123'})
//         }
//         else{
//             reject('ERROR:SOMETHING WENT WRONG')
//         }
//     },1000)
// })
// promiseFour
// .then(function(user){
//     console.log(user);//give you error 
//     return user.username//to return value to next function
// })
// .then(function(username){
//     console.log(username);

// })
// .catch(function(error){
//     console.log(error);

// })
// .finally(function(){
//     console.log('The promise is either resolved or rejected');
// })






//example-5(using async and await)


//while using async and await must use try and catch block 
//try block is used to handle data arrive from promise if promise is resolved(like ->.then)
//catch block is used to hanle error arrive from promise if promise is rejected(like ->.catch)


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: 'javascript', pass: '123' })
//         }
//         else {
//             reject('ERROR:JS WENT WRONG')
//         }
//     }, 1000)
// })

// async function consumePromiseFive () {
 
//   try {
//     const response= await promiseFive
//     console.log(response);
//   } 
// catch (error) {
//     console.log(error);
    
//   }
// }
// consumePromiseFive()//execute  function explicitly


//Live example -6(fetching data using  async and await)

async function getAllUser(params) {
 try {
    const response= await  fetch('https://jsonplaceholder.typicode.com/users')
    
    const data= await response.json()//search on chatgpt (why need to write await before response.json())
  console.log(data);
  
    // console.log(response);
    
    
 } catch (error) {
    console.log('E:',error);
    
 }
}
getAllUser()







//live example-7(fetching data using .then and .catch)


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//    return response.json()
// })
// .then(function(data){
//    console.log(data);
   
// })
// .catch(function(error){
//    console.log(error);
   
// })                                               
