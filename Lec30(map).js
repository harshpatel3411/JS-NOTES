//map is also call back function
//in other words map is used to perform mathematical operation



const mynums=[1,2,3,4,5,6,7,8,9,10]
// method--1
//USING MAP 
const val=mynums.map((num)=>{
//    console.log(num);
   
//    console.log(num+10);

   
   return num+10;
})
console.log(val);//[11,12,13,14,15,16,17,18,19,20]
console.log(mynums);


//method--2
//using for each
// let newarr=[]

// const main=mynums.forEach((num)=>{
  
   
//     newarr.push(num+10)
   
   
   
// })


// console.log(newarr);//[11,12,13,14,15,16,17,18,19,20]


let lang=['py','js','java']

//Map also comes with three properties:->
let  value=lang.map((items,index,arr)=>{
    console.log(items,index,arr);
    
})



//using only for loop
//method-3
// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Conceptual internal working of map
// const val = []; // This is like the hidden result array

// for (let i = 0; i < mynums.length; i++) {
//     const num = mynums[i];
//     const newNum = num + 10; // Applies the function to each element
//     val.push(newNum); // Adds the result to the val array
// }

// console.log(val); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



//note--map badhi value par iterate kare jyare filter according to condition iterate kare 




//---------->>>chaning method--------->>>

//chaning means using multiple methods simulateniously

//example--1
// const newnumber=mynums
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=>num>=40)
               

// console.log(newnumber);



