const github='https://api.github.com/users/hiteshchoudhary'

const user=fetch(github)
console.log(user);//give promise with 3 properties => 1.prototype,2.promisestate,3.promiseresult

//have aa promiseresult ma maro data hase tene access karva mate then use karvu pade

user.then(function(data){
    console.log(data);// have aa data to malse , but aa readable nai hoy atle tene readble karva mate json ma convert karvo pade
    
   const json=data.json()
   console.log(json);//have json mane farithi promise return kare  with 3 properties => 1.prototype,2.promisestate,3.promisereresult
    
   //have farithi promisereresult ni   andar thi farithi data nikadva mate mare then no use karvo pade and then ma moklva mate mare return lakhvu pade 
   
   return json
})
.then(function(data){
    console.log(data);
    
    console.log(data.id);//have hu ahi maro data compelete access kari saku
    console.log(data.email);//have hu ahi maro data compelete access kari saku
    console.log(data.followers);//have hu ahi maro data compelete access kari saku
    
})


//promise is an object that represent eventual completion or failure of async operation