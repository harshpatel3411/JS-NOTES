function createUser(username,price) {
   this.username=username
  this.price=price
} 

createUser.prototype.increment=function(){
   console.log(this.price++);
}

createUser.prototype.printMe=function(){
console.log(`${this.price}`);
}


const chai=new createUser('chai',22)
const tea=new createUser('tea',250)

console.log(chai);//here chai is not a function it is object
chai.printMe()
chai.increment()



