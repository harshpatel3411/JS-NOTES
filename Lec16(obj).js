// //singleton

// //obj literals

// //symbol

// //Note:IN OBJECTS THERE IS NO SEQUENCE LIKE ARRAY ,MEANS ELEMENTS OF OBJECT CAN BE EXECUTED IN RANDOM SEQUENCE SOMETIME
const mysym=Symbol("key1")
// console.log(mysym);

// //(1)TO CREATE OBJECTS
const jsUser={
    "name":"harsh",
    "full Name":"harsh patel",
    age:20,
    [mysym]: "mykey1", // Using the Symbol as a key(dont use like this --->mysym:key1 becuase it is a key)
    location:"mahesana",
    email:"harshpatel@gmail.com",

    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// //(2)-->>NOW METHODS TO ACCESS ELEMENTS
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])

// // // //(3)-->>for keyword 
// console.log(jsUser[mysym])//mykey1
// console.log( typeof jsUser[mysym])//string
// console.log(typeof [mysym])//object because it is array

// console.log(mysym)//Symbol(key1)
// console.log(typeof mysym)//symbol

// console.log(jsUser)
// // (when you print this you will see op--[Symbol(key1)]: 'mykey1' )

// //(4)to change the value of object elememts
// // jsUser.email="harsh@gpt.com"
// // console.log(jsUser.email);

// //(5)to frizz value of object(VALUE OF OBJECT WILL NOT BE CHANGED)
// // Object.freeze(jsUser)
// // jsUser.email="tisha@gmail.com"
// // console.log(jsUser.email);


// //(6)function for object
// jsUser.greeting=function (){
//     console.log("hello js user");
 
// }
// console.log(jsUser.greeting)//[Function (anonymous)]
// console.log(jsUser.greeting())//hello js user,undefiend
// console.log(jsUser);

// //6.1(with return)
// jsUser.greeting=function(){
//     console.log("hello js user");
//  return 'done';
// }
// console.log(jsUser.greeting())//op-hello js user,done(it will call to function to print hello js user and then return done)

// //(7)this keyword to access element

// jsUser.greeting2=function(){
//     console.log("Refers to current obj:-",this);
    
//     console.log(`hello js user ${this.name}`);
//  return 'okay';
// }
// console.log(jsUser.greeting2())