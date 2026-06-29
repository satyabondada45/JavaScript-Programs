function checkUser(users){
    try{
        for(let i=0;i<users.length;i++){
            if(users[i].age<18){
                throw "User is UnderAge"
            }
            else{
            console.log( users[i].name)
            }
        }
        
        }
    catch(error){
        console.log(error)
    }
}


const users = [
  {name:"satya", age:20},
  {name:"ram", age:15},
  {name:"krishna", age:25}
];
checkUser(users)
