

// // //just decalre arr
let myheros=['thor','spiderman']


// // //just define obj
let heroPower={
    thor:'hammer',
    spiderman:'sling',
    

    getSpiderpower:function(){
        console.log(`spidy power is :${this.spiderman}`);
        
    }
}
// //give this prototype to all object because everthing goes from object
Object.prototype.harsh=function(){
    console.log('harsh is present in all object');
    
}


// // //check object and arr has that prototype or not
// heroPower.harsh()//harsh is present in all object
// myheros.harsh()//harsh is present in all object



// //example--2

//give prototype to array only 
Array.prototype.heyHarsh=function(){
    console.log('hey harsh');
    
}
// //definately myheros will have access of prototype of array
myheros.heyHarsh()//hey harsh

// //now check heropower object also has accesss of it or not
heroPower.heyHarsh()//error




//INHERITENCE


// const user={
//     name:'chai',
//     email:'chai@google.com',
// }
// const Teacher={
//     makeVideo:true,
// }
// const teachingSupport={
//     isAvailable:false
// }

// const TAsupport={
//     makeAssignment:'js assignment',
//     fullTime:true,
//     __proto__:teachingSupport//to take propertise of anyfunction
// }

// Teacher.__proto__=user//to take properties of student

// //1. old syntax-->.__proto__
// //2.modern syntax-->

// Object.setPrototypeOf(teachingSupport,Teacher)// here teaching support will access properties of teacher




//examplee

// let anotherUserName='chaiAurCode          '
// String.prototype.trueLength=function(){
//     console.log(`${this}`);
    
//     console.log(`true length is:-${this.trim().length}`);
    
    
// }
// anotherUserName.trueLength()
// 'harsh'.trueLength()
// 'tisha'.trueLength()
//this ka matlaab jis 
//this means jisnebulay hain