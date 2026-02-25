//method to create array
//  const myArr=[0,1,2,3,4,5]
// const myheros=["harsh","tisha"]
// console.log(myArr[0]);
// console.log(myheros[1])



//method(2) to create array
// const arr2=new Array(1,2,3,4)
// console.log(arr2[2]);
// console.log(arr2.length)

//array methods(ADD ELEMENT AT THE LAST POSITION OF ARRAY)
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// //   POP(  to remove last element pop is used)
// // myArr.pop()
// // console.log(myArr)

// //unshift (USED TO ADD ELEMENT AT THE FIRST POSITION OF ARRAY)
// myArr.unshift(9)
// console.log(myArr)

// //shift (used to remove first element)
//  myArr.shift()
// console.log(myArr)

//  //returns true/false
// // console.log(myArr.includes(0))

// //to get index
// console.log(myArr.indexOf(2))
// console.log(myArr.indexOf(19))


// // .join()<---it takes same value of our main array but returns results in string
//  const newArr=myArr.join()
//  console.log(myArr)
//  console.log(newArr)
//  console.log(typeof newArr)

//slice,splice(interview point)
//(1)slice(IT DOES NOT INCLUDE LAST ELEMENT)AND (RETURNS COPY OF ARRAY TO OTHER ELEMENT LIKE STACK)

// const myArr=[0,1,2,3,4,5]
// console.log("A" ,myArr);

// const myn1=myArr.slice(1,3)//op-[ 1, 2 ]

//  const myn1=myArr.slice(-4,3)//op--[1,2](here couting start from the end of array means starting element is 1 and ending element is 2 (3 IS NOT INCLUDED))
// console.log(myn1);





// console.log(myn1)

// console.log(myArr)

//(2)splice(IT INCLUDES COMPLETE RANGE)(GIVE ORIGINAL VALUR FOR OPERATION LIKE HEAP)
//splice ae first element thi laine chella element sudhi element delete kare and aa main array ne pan effect kare
// console.log("B" ,myArr)

// const myn2=myArr.splice(1,3)
 

// console.log(myn2)
// console.log(myArr)

// //note--...1: One(1) is the starting index. The splice operation starts at index 1.
// //.........2: THREE(3) is the deleteCount. It specifies that 3 elements should be removed starting from index 1.
// //.........3: when you print (myn2)  will get only remaning element that is not deleted from main array



// //(3)
// console.log("c" ,myArr)

// console.log(myn2)
