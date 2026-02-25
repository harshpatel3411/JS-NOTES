//destructuring

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"harsh"
}




//(1)property to access element of obj
//(1.1)
//course.courseInstructor
// (1.2)
// const{courseInstructor}=course;
// console.log(courseInstructor);//harsh
//(1.3)(we can also change its name using following property)
// const{courseInstructor:instructor}=course;
// console.log(instructor);//harsh


//just for knowledge(concept of react ,no need to go into depth currently)
// const navbar=({compay})=>{

// }
// console.log(navbar(company="harsh"))


//(2)APIS

//(IT IS JUST OVERVIEW OF JSON)
//JSON DOES NOT HAVE NAME LIKE OBJECT( MEANING JSON IS NOT STORED INTO VARIBALE )
//IN JSON KEYS WILL BE STRING
//JSON FORMAT FOLLOWING--

//TYPE1 OF JSON
// {
//     "name":"harsh",
//     "coursename":"js in hindi",
//     "price":"free"
// }


//TYPE2 OF JSON
// [
//     {}
//     {}
//     {}
// ]

//(NOTE:JSON CAN BE {} AND ARRAY OF OBJECT [{}])