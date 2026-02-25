
//(1)other method to declare object
//const tinder=new Object()
//  const tinderUser={}
//  tinderUser.id='123abc'
//  tinderUser.name="sammy"
//  tinderUser.isLoggedIn=false;
// console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }

//(2)nested object
// const regularUser={
//     email:"samm@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"harsh",
//             lastname:"patel"
//         }
//     }
// }
// console.log(regularUser.fullname);//{ userfullname: { firstname: 'harsh', lastname: 'patel' } }
// console.log(regularUser.fullname.userfullname.firstname)//harsh

//(3)combine object
const object1={
    1:"a",2:"b"
}
const object2={
    3:"a",4:"b"
}
//3.1>>
// const obj3={
//     ...object1,...object2
// }
// console.log(obj3)


//3.2>>
// const obj3=Object.assign({},object1,object2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(object1);//{ '1': 'a', '2': 'b' }


//3.3>>
// const obj3=Object.assign(object1,object2)
// console.log(obj3);////{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(object1);////{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//note jyaree assign use karia tyare-->({},object1,object2)<--aa syntax use karvi , because assign ae badhi value ne first parameter add kare che .jo use nai kare to first parameter ni value change thai jay


//extra
//console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }
//to get keys of objects
//console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
//to get values of objects
//console.log(Object.values(tinderUser))//[ '123abc', 'sammy', false ]
//entries
//console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
//to check that object has perticular property or not
//console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true