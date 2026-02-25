//rest operator(...)
// 1>>to add multiple paramter and print them
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))//op--[ 200, 400, 500 ]


// (EXTRA info)
//function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,300,50,500))//op--[ 300, 50, 500 ]




//3>>>how to pass object value into function
// const user={
//     username:"harsh",
//     price:199
// }

// function handleObejcts(anyobject){

// console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// handleObejcts(user)//op--username is harsh and price is 199(METHOD 1 TO PASS INFOMATION IN ABOVE FUNCTION)

// handleObejcts({
//     username:"sam",
//     price:23
// })//op--username is sam and price is 23(METHOD 2 TO PASS INFOMATION IN ABOVE FUNCTION)



//4>>>TO PASS INFORMATION BY ARRAY

const myNewArray=[200,400,100,600]

function returnsecondvalue(getarray){
return getarray[1]
}

console.log(returnsecondvalue(myNewArray))//400
console.log(returnsecondvalue([200,400,100,600]))//400