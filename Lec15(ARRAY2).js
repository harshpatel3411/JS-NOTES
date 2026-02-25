const marvel_heros=["thor","ironman","spiderman"]

const dc_heros=["superman","flash","batman"]


//(1)--using push to combine 2 array(it just add element into array ,will not combine 2 array properly)

//  marvel_heros.push(dc_heros)
// console.log(marvel_heros)--->>[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1])


//(2)--using concat to combine 2 array(it combine 2 array properly)
// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros)-->>[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//(3)spread(works same as concat but you have to use(...)<--must)
// const allheros=[...marvel_heros,...dc_heros]
// console.log(allheros)//-->>[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const allheros2=[marvel_heros,dc_heros](without...)
// console.log(allheros2)//-->>[
//     [ 'thor', 'ironman', 'spiderman' ],
//     [ 'superman', 'flash', 'batman' ]
//   ]
//NOTE--(must use (...) while combing array)
// console.log(allheros2[1][2])//-->>batman


//(4)TO ARRANGE ARRAY IF YOU HAVE SUBARRAYS LIKE FOLLOWING
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=another_array.flat(Infinity)

// console.log(real_another_array);//--->[
// //     1, 2, 3, 4, 5,
// //     6, 7, 6, 7, 4,
// //     5
// //   ]

//(5)EXTRA--
// console.log(Array.isArray("harsh"));//->false

//TO CONVERT STRING,NUMBER,etc INTO ARRAY
// console.log(Array.from("harsh"));//->[ 'h', 'a', 'r', 's', 'h' ]

//TO CONVERT INDIVIDUAL ELEMENT INTO ARRAY
// let score1=100;
// let score2=200;
// let score3=300;

// console.log(Array.of(score1,score2,score3))//->[ 100, 200, 300 ]

//TRY THIS BY YOUR SELF
// console.log(Array.from({name:"harsh"}));//-->[]
//(The object {name: "harsh"} does not have a length property or numeric keys that Array.from() can interpret as array elements. Therefore, Array.from() does not convert it into an array, and it results in:)


