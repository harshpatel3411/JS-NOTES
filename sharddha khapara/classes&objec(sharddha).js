// const student={
//     fullName:'harshpatel',
//     marks:70.33,
//     printMarks:function(){
//         console.log('marks',this.marks);
        
//     }
// }
// student.printMarks()



// //example-2(prototype)
// //it is used to access properties of other object

// const employee={
//     calctax(){
//         console.log('tax rate is 10%');
        
//     },
//     username:'harsh',
// }

// const karanArjun1={
//     salary:50000,
   

// }

// const karanArjun2={
//     salary:50000,
//     calctax(){
//         console.log('tax rate is 20%');
        
//     }

// }

// karanArjun1.__proto__=employee
// karanArjun2.__proto____=employee


// console.log(karanArjun1.calctax());//tax rate is 10%
// console.log(karanArjun2.calctax());//tax rate is 20%



// // NOW ALL ABOUT CLASSES--------------
//exampl-3(classes and constructor)

//classes is the blueprint used to create new objects

// class Toyotacar {
//     constructor(brand,mileage){

//         console.log('creating new object');
//         this.brand=brand
//         this.mileage=mileage
//     }
//     start(){
//         console.log('start');
        
//     }
//     stop(){
//         console.log('stop');
        
//     }
//     setBRand(brand){
        
//     }
// }

// let fortuner=new Toyotacar("legender",10);//in console-creating new object
// console.log(fortuner);

// let lexus=new Toyotacar('lexus',12);
// console.log(lexus);


//constructor method invoked automaticlly
//constructor is executed automatically as soon as you create new object




//---------------INHERITENCE---------------------//

//example-1

//  class Parent{
//     hello(){
//         console.log('hello');
//     }

//  }
//  class Child extends Parent{}

//     let obj= new Child();
// console.log(obj);


//example-2

// class Person{

//     constructor(name){
//       this.name=name  //it will be automatically executed in all objects because i have extended to other class with person class
        
//     }
//     eat(){
//         console.log('eat');
        
//     }
//     sleep(){
//         console.log('sleep');
        
//     }
//     work(){
//         console.log('do nothing');
        
//     }

// }

// class Engineer extends Person{
//     work(){
//         console.log('solve problem,build something');
        
//     }
// }

// let harsh=new Engineer('harsh')
// console.log(harsh.work());


// class Doctor extends Person{
//     work(){
//         console.log('treat patient');
//     }
// }

// let hardi=new Doctor('hardi')
// console.log(hardi.work());





//---------------SUPER KEYWORD---------------------//


//in js, i use super keyword when my child class has constructor and if  i want to take properties of parent class and parent also has constructor ,
//  so at that time to use both constructor i use super keyword 

//--->child constructor is executed first , then parent constructor is executed 

// //example-1
// class Person{
//     constructor(name){
//         console.log('enter parent constructor');
//       this.name= name
//     }
//     eat(){
//         console.log('eat');
        
//     }
//     sleep(){
//         console.log('sleep');
        
//     }
//     work(){
//         console.log('do nothing');
        
//     }
// }


// class Engineer extends Person{
//     constructor(branch){
//         console.log('enter child constructor');
        
//         super();//to invoke parent class constructor
//         this.branch=branch;
//         console.log('exit child constructor');
        
//     }
//     work(){
//         console.log('solve problem,build something');
        
//     }
// }

// const engineer=new Engineer('computer engineer');


//example-2


//jyare mare parent na constructor ma koi value pass karavi hoy  tyare mare te super keyword ma lakhvi pade


// class Person{
//     constructor(name){
        
//       this.name= name
//     }
//     eat(){
//         console.log('eat');
        
//     }
//     sleep(){
//         console.log('sleep');
        
//     }
//     work(){
//         console.log('do nothing');
        
//     }
// }


// class Engineer extends Person{
//     constructor(name){
     
        
//         super(name);//to invoke parent class constructor
//        this.Person=name
        
//     }
//     work(){
//         super.eat()//now eat function is executed first then , log will be printed
//         console.log('solve problem,build something');
        
//     }
// }

// const engineer=new Engineer('harsh');
// console.log(engineer);
// console.log(engineer.work());



// // //practise question-1
// class student {
//     constructor(name,email) {
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log('view data');
        
//     }
// }

// const student1= new student('harsh','h@123')
// console.log(student1);

// console.log(student1.viewData());

// const student2= new student('tisha','t@123')
// console.log(student2);

// const teacher= new student('Dean','Dean@123')
// student1.viewData()
// teacher.viewData()


// //ex-2

// let DATA='SECRET INFORMATION';

// class student {
//     constructor(name,email) {
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log('view data');
        
//     }
// }
// class admin  extends  student{
//     constructor(name,email){
        
//         super(name,email)
    


//     }
    
//     editData(){
//     DATA="some new value";
//     console.log('hello',DATA);
    
//     }

// }
// const admin1=new admin('admin','admin@gmail.com')
// console.log(admin1);

// console.log(admin1.editData());


// console.log(DATA);




class person {
    constructor(age,name) {
        this.age=age
        this.name=name;
    }

    Sayname(){
        console.log(this.age,this.name);
        
    }
}


let info=new person(20,'harsh')
let het=new person(19,'hello')
let het2=new person(19,'kem cho')

info.Sayname()
het.Sayname()
het2.Sayname()