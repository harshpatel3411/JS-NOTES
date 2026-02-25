//1>>>....TO GET CURRENT DATE WITH DIFF> METHOD()

// let myDate=new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON());



//2>>>....TO DECLARE PERTICULAR DATE()

//(1)yy//mm//dd
// let myCreatedDate=new Date(2023,0,1);
// console.log(myCreatedDate.toLocaleDateString());

// //(2)TO GET MORE SPECIFIC DATE

// let myFirDate=new Date(2023,0,23,5,30);
// console.log(myFirDate.toLocaleString());//MUST USE toLocaleString() TO GET MORE SPECIFIC DATE


// //(3)YY/MM//DD

// let mySecDate=new Date("2023/01/23");
// console.log(mySecDate.toLocaleString());

// // //(4)MM//DD//YY

// let myThirdDate=new Date("01/23/2023");
// console.log(myThirdDate.toLocaleString());

// //(5)DD/MM/YY(invalid)
// let myfourthDate=new Date("23/01/2023");
// console.log(myfourthDate.toLocaleString());

// // //(6)invalid(yy-dd-mm)
// let myFifDate=new Date("2023/23/01")
// console.log(myFifDate);


//3>>>....timestamp

// let NewDate=new Date("01-14-2023");
// let timestamp = Date.now()
// console.log(timestamp);//miliesecond value
// // // //will output the current timestamp in milliseconds since January 1, 1970, 00:00:00 UTC (known as the Unix epoch). The Date.now() function returns this value, which is a number representing the number of milliseconds that have elapsed since the Unix epoch
// // // //jo tane khbr na pade to (mdn date )per jaine article vachje

// // //aanu output milisecond ma avse and aa calculate thase from 1 january 1970 means jyarthi date mate na rule lagu padya che js ma ,1 january thi jetla milisecond viti gaya che ae output ma avse.(means as much millisecond passed from 1 January  1970 till today that will be result)
// // //diffrent methods are following
// console.log(NewDate.getTime());
// // //to convert into second
// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/100))



//4>>>...TO GET CURRENT INFORMATTION
// let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)//added 1 because in js months starts form 0
// console.log(newDate.getDay())
// console.log(newDate.getTime())

// console.log(`${newDate.getDay()} and time is ${newDate.toLocaleString()}`);


//5 >>>...TO GET CURRENT INFORMATION WITH ACCURATE FORMATE

const MyDate=new Date()
const MyOwnDate=MyDate.toLocaleDateString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12"
});

console.log(MyOwnDate);
