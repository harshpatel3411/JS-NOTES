const coding=['js','ruby','java','python','cpp']

// const values=coding.forEach( (item)=>{
//     console.log(item);
//     // return values;//op--undefined--for each loop does not return any value
  //return coding[3];
// })
// console.log(values);

//note--for each loop never return any value 



//<----------1.filter---------->
//it also work with call back fuction
//it gives duplicate value after configuration like stack operation
const mynums=[1,2,3,4,5,6,7,8,9,10]


//method 1(explicite return )
// const mynum2=mynums.filter((num)=>{
//   return  num >5
// })
// console.log(mynum2)//op-[ 6, 7, 8, 9, 10 ]



mynums.filter((items,index,arr)=>{
   console.log(items,index,arr);
   
})//filter also comes with three paramters items,index,arr



//method 2(implicit return)
// const mynum3=mynums.filter((num)=> num>5)
// console.log(mynum3)

//if i want use for each to  do this same thing as above follow following method

//method 3

// const newnums=[]

// mynums.forEach( (num)=>{
//     if (num > 5) {
//         newnums.push(num)
//     }
// })

// console.log(newnums);//[ 6, 7, 8, 9, 10 ]

const books=[
    {
       title :'book one', genre:'fiction',publish:'1981',edition:'2004'
    },
    {
       title :'book two', genre:'non-fiction',publish:'2001',edition:'2010'
    },
    {
       title :'book three', genre:'History',publish:'1947',edition:'2014'
    },
    {
       title :'book four', genre:'non-fiction',publish:'1970',edition:'189'
    },
    {
       title :'book five', genre:'science',publish:'2005',edition:'2022'
    },
    {
       title :'book six', genre:'fiction',publish:'1980',edition:'2005'
    },
    {
       title :'book seven', genre:'history',publish:'1981',edition:'2003'
    },
    {
       title :'book eigth', genre:'science',publish:'1997',edition:'2001'
    },
    {
       title :'book nine', genre:'history',publish:'1981',edition:'2017'
    },
    {
       title :'book ten', genre:'fiction',publish:'1972',edition:'2019'
    },


]
//let userbooks=books.filter((bk)=>bk.genre==='history')


//  userbooks=books.filter((bk)=>{
//     return  bk.publish>= 1995
// })



userbooks=books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre==='science'
})


console.log(userbooks);


