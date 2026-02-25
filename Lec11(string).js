
//STRING 

// const firstname='harsh'
// const suraname="patel"
// console.log(`HELLO MY NAME IS ${firstname} ${suraname}` );
// console.log(suraname.length);
// console.log(suraname.charAt(0))
// console.log(suraname[0]);
// console.log(suraname.toUpperCase())
// console.log(suraname.substring(0,4))
//console.log(suraname.indexOf('t'));

// let newName="  tisha ";
// console.log(newNAme.trimEnd());


// const url="www.amazon.com"
// console.log(url.replace('amazon','harsh'));

// console.log(url.includes('amazon'));

// console.log(url.split("."))//[ 'www', 'amazon', 'com' ]



//slice(confusing)

const myname='harsh patel';

console.log(myname.slice(-5,3))//""

console.log(myname.slice(-9,3));//r
 

// console.log(myname.slice(2,4))//rs

//note in nagative index like this -->console.log(myname.slice(-9,3)) counting will start from the end of the string

//jyare nagtive index lakhisu atle atle pachad thi couting ganava ma avse


//ex--console.log(myname.slice(-9,3));op-->r
// The string myname is 'harsh patel'.
// The slice method is called with beginIndex of -9 and endIndex of 3.
// When using a negative index, it counts from the end of the string. So, -9 refers to the character at position myname.length - 9, which is the character 'r' (index 2 in zero-based indexing).

// However, since the endIndex is 3, the slice will end before the character at index 3. Therefore, the slice will include characters from index 2 to 2 (not including 3).

// console.log(myname.slice(-5,3))//here starting index-p ,ending index-s
//hence it give empty space in output because here p comes after s so that extraction(badbaki)is not possible