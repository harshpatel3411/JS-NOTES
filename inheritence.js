class user{
    constructor(){
        this.username=this.username
    }
    logMe(){
        console.log(`${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }
}