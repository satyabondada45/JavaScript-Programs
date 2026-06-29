function login(username,password){
    try{
        if(username=="satya"){
            if(password=="1234"){
                console.log( "Login successful")
            }
            else{
                throw "invalid password"
            }
            
        }
        else{
            throw "invalid username"
        }
    }
    catch(error){
        console.log(error)
    }
}
login("satya","1234")