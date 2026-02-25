//PRINT TBALE OF 2(ex-1)

// for (let index = 0; index <=10; index++) {
//     console.log("2","*",index,"=",(2*index));
// }


//PRINT 5 IS BEST NUMBER(ex-2)
// for (let i = 0; i < 10; i++) {
// console.log(i)
// if (i==5) {
//     console.log("5 IS MY LUCKY NUMBER")
// }
   
// }


//(ex-3)
// for (let i = 0; i <=10; i++) {
//    const elements=i
//    if (elements==5) {
//     console.log("5 is best number")
//    }
   
//    console.log(elements)

//    if (elements==5) {
//     console.log("5 is best number")
//    }
    
// }

//ex-4
// for(let i = 1; i <=10; i++) {
//     console.log(`outer loop: ${i}`)
//     for (let j = 1; j <=10; j++) {
//         // console.log(`Inner loop: ${j} and  Outer loop:${i}`)
//         console.log(i+"*"+j+"="+i*j);

//     }
    
// }


//ex--5
// for(let i = 1; i <=10; i++) {
//     console.log(`outer loop: ${i}`)
//     for (let j = 1; j <=10; j++) {
//         console.log(`Inner loop: ${j} and  Outer loop:${i}`)
   

//     }
    
// }



//for loop with array


// let myArray=["harsh","tisha","dhrupal"]
// console.log(myArray.length)
// console.log(myArray.indexOf("harsh"));

// for (let index = 0; index <myArray.length; index++) {
//     const element = myArray[index]//ahi thi tare array no element acess thase,myArray[0]=harsh;
//     console.log(element)
// }


//keywords
//break and continue
//(1.break-MAFI NAHI MILEGI )
// for (let index = 1; index <=20; index++) {

//     if (index==5) {
//         console.log("I GOT MY 5 NUMBER")
//         break;
//     }
    
//  console.log(`value of I is: ${index}`);
    
// }


//(2.continue--EK BAR MAF KARDO)
for (let index = 1; index <=20; index++) {

    if (index==5) {
        console.log("I GOT MY 5 NUMBER")
        continue;
    }

 console.log(`value of I is: ${index}`);
    
}
//--AHI EVU THASE KE JYARE INDEX==5 THASE TYARE 5 NUMBER PRINT NAI THAY BUT AENI JAGYE--("I GOT MY 5 NUMBER") PRINT THAI JASE