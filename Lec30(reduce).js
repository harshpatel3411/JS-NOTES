//used to find sum of each elements of array

//using simple function
const num=[1,2,3]
const mytotal=num.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval ${currval}`);
    
return acc + currval
},0)


console.log(mytotal);


//using arrow fun

// const mytotal=num.reduce((acc,currval)=>(acc+currval),0)

// console.log(mytotal);


//ex-2
// const shoppingcart=[
//     {
//         itemname:'js course',
//         price:2999,
//     },
//     {
//         itemname:'pyhton',
//         price:999,
//     },
//     {
//         itemname:'mobile dev course',
//         price:4999,
//     },
//     {
//         itemname:'data science',
//         price:12000,
//     },
// ]


// const mytotal=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
// console.log(mytotal);
