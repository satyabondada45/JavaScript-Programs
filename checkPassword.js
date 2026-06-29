function checkPassword(string){
    try{
        if(string.length<8){
            throw "password is too short"
        }
        else{
            console.log("password accepted")
        }
    }
    catch(error){
        console.log(error)
    }
}
let str="satya"
checkPassword(str)