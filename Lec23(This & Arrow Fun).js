//(1)ALL ABOUT THIS KEYWORD 
// const user={
//     username:"harsh",
//     price:999,
//     welcomeMessgae:function(){
//         console.log(`${this.username} ,welcome to website`);
// console.log(this)
//     }

// }
// user.welcomeMessgae()//op--harsh ,welcome to website and
 //op--{
//   username: 'harsh',
//   price: 999,
//   welcomeMessgae: [Function: welcomeMessgae]
// }


// user.username="tisha"


// user.welcomeMessgae() //op--tisha ,welcome to website and
 //{
//     username: 'tisha',
//     price: 999,
//     welcomeMessgae: [Function: welcomeMessgae]
//   }


// IN NODEJS--console.log(this);//op--{}

//IN BROWSER---note--jyare  browser ma console.log(this) print karavis tyare window lakhai ne avsse output ma 

//(2)extra

//2.1


// let username = 'harsh';

// function chai() {
//   let username = "harsh"; // local variable
//   console.log(this);           // ❗️ undefined in strict mode
//   console.log(this.username);  // ❗️ TypeError: Cannot read property 'username' of undefined
// }

// chai();


//2.2
// function chai(){
//     console.log(this)

// }
// chai()

//jyare function ni andar this print karavia atle badhi propertise apse


//2.3
// const chai=function(){
//     let username="harsh"
    
//  console.log(this.username)
// }
// chai()//op-undefined


//NOW ALL ABOUT ARROW FUNCTION--->>
//Syntax of arrowfunction--const funname=()=>{}

//(3)arrow function

// const chai=()=>{
//     let username="harsh"
//     console.log(this)//--{}
//  console.log(this.username)//op--undefined
// }
// chai()

//diffrence between function and arrow function--->arrow function golbal context ne refer na kare,jyare simple function global context ne refer kare che

//Syntax of arrowfunction-- ()=>{}


//we can hold it into variable

//(1)explicit return

// const addTwo=(num1,num2)=>{
// return num1+num2
// }
// console.log(addTwo(3,4))//op--7


//(2)implicit return

//return will be removed
//method-1
// const addTwo=(num1,num2)=> num1+num2
// console.log(addTwo(3,4))//op--7


//method-2
// const  addTwo=(num1,num2)=> (num1+num2)
// console.log(addTwo(3,4))//op--7


//note--for {}--to write return is must BUT for()--to write return is not necessary
//{}--explicite return ,()--implicite return


// example(1)
// //this thing work for only objects
// const name=(num1,num2)=>({username:"harsh"})

// console.log(name(2,3))//{ username: 'harsh' }


//example(2)

// const cal=(num1,num2)=>({

   
//     result:num1+num2,
//     })
     
    
//     console.log(cal(1,2))//op--{ result: 3 }
    
    