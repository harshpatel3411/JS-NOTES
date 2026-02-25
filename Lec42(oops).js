// const user={
//     username:"harsh",
//     logincount:8,
//     signedIn:true,

//     getUserDetails:function () {
//         console.log(this.username);
        
//     }
// }

// console.log(user.getUserDetails());


//2.Constructor function

//example-2.1
// function user(username,logincount,isLoggedIn){
//     this.username=username;
//     this.logincount=logincount;
//     this.isLoggedIn=isLoggedIn;
//     return this
// }
// const userOne=newuser('harsh',12,true)
// const userTwo=user('tisha',10,false)//overide value of userone
// console.log(userOne);


//to avoid above issue use below concept
//example-2.2(with new keyword)

// function user(username,logincount,isLoggedIn){
//     this.username=username;
//     this.logincount=logincount;
//     this.isLoggedIn=isLoggedIn;
//     return this
// }
// const userOne=new user('harsh',12,true)
// const userTwo=new user('tisha',10,false)
// console.log(userOne);
// console.log(userTwo);


//example-2.3(without return keyword)
//Note--it returns value of this implicitly

// function user(username,logincount,isLoggedIn){
//     this.username=username;
//     this.logincount=logincount;
//     this.isLoggedIn=isLoggedIn;
//     this.greeting=function(){
//         console.log(`welcome:-${this.username}`);
        
//     }
    
// }
// const userOne=new user('harsh',12,true)
// const userTwo=new user('tisha',10,false)
// console.log(userOne.constructor);//give reference to itself
// console.log(userOne);
// console.log(userTwo);
// userOne.greeting()
// console.log(userOne instanceof user)//true
// console.log(userOne instanceof Object);//true
// console.log(userOne===userTwo);//false
// console.log(typeof user);//function





//Steps:-
//1.when you write new keyword , a new instance is created
//2.constructor function is created because of new keyword
//3.everthing is added into this
//4.you get it into your function



