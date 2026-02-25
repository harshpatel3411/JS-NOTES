//(1)for of

//["","",""]
//[{},{},{}]


//this loop can be used for array,string,map ,etc.
//(we do not need to declare condition and upadation  for forof,forin,foreach loop)

//ex-1
const arr=[1,2,3,4,5]



// for (const num of arr) {

// console.log(num);


 
// }//op-1 2 3 4 5


//ex-2
// const greetings='hello world'

// for (const greet of greetings) {
//     if (greet==" ") {
//         continue;
//     }
//     console.log(`each char is:${greet}`)
// }



//(2)maps
//map is a combination of keys and values ,it gives result in form of array
//ex-1
const map=new Map()

map.set('IN',"india")
map.set('USA',"united state of america")
map.set('fr',"france")
map.set('IN',"india")




// console.log(map);
// console.log(map.size);//3


//note--map is used for unique value and maintain order
//ex-1(output array ni form ma avse)
// for (const key of map) {
//     console.log(key);

// }

// //to access only keys
// for (const key of map.keys()) {
//     console.log(key);
// }
// // to access only values
// for (const key of map.values()) {
//     console.log(key);
// }



//ex-2(jyare output array ni from ma na jovtu hoy )
// //destrucing of array to get output in effective manner

// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }


//for of loop for objects
const myObject={

    'game1':'free fire',
    'game2':'spiderman'
}


// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }//op-- myObject is not iterable

//note--myobject ne iterate karavni biji methods hoy che aa method and sytax use na kari sakia


