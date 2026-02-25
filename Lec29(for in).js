//how to aceess perticular elment of objets


// const intro={
//     'name':"harshp",
//     'std':'btech'
// }
// console.log(intro['name']);


//<------------for in-------------->
//for in

//to iterate object we have to use for in loop
//ex-1
// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     java:'java'
// }
//to get both key and value
//Inside seen js is stored as "js"(js=>"js")

// for (const key in myObject) {
// console.log(`${key}  is  for ${myObject[key]}`);
// }


//ex2-(diff between forin or forof  interms of array)
// const programming=['js','java','cpp']
// for (const key in programming) {
//  console.log(key);//op--0,1,2
// }

// const pr2=['js','java','cpp']
// for (const key of pr2) {
//     console.log(key);//op--js,java,cpp
//    }

// const str='harsh patel'
// for (const key in str) {
//    console.log(key);
   
// }

//we cant use for in for map 

// const map=new Map()

// map.set('IN',"india")
// map.set('USA',"united state of america")
// map.set('fr',"france")
// map.set('IN',"india")


// for (const key in map) {
// //  console.log(key);(no output will be generated )
// console.log(typeof map);

 
// }



// for (const key of map) {
//     console.log(key);
// }