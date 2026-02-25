//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)


//syntax--()();note(after finishing code ;<-- semicolen is must in iife)

//example(1)

//named iife(which function has name is called named iife)
(function chai(){
console.log("db connected");//op--db connected

})
();

//INTERVIEW--WHY WE USE IIFE-->golbal scope na variable sometime pollution felave che atle tenathi bachav mate aa vastu user karia

//(example 2)
//syntax for arrow function--(() => { ... })
//note--write const or var outside arrow function ,khali apde je main content che aej wrap karvan che arrow function ma
const name=(
()=>{
    
        console.log("hello harsh i am IIFE")}//op-hello harsh i am IIFE
        
    
)();

//------------or----------------//
//simple iife(which function does not have name is called simple iife)
((name)=>{
    
    console.log(`hey welcome ${name}`)}//op-hey welcome harsh
    

)("harsh");