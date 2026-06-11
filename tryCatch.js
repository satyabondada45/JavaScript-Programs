function CheckAge(age){
    try{
        if(age<18){
            throw "not eligible to vote";
        }else{
            console.log( "eligible to vote")
        }
    }catch(error){
        console.log(error)
    }
}
CheckAge(18)