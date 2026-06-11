const arr=["satya",1,2,3,"S",2,"ramana","p"];
const str=[]
const num=[]
const ch=[]
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]== "number"){
        num.push(arr[i])
    }else if(typeof arr[i]=="string" && arr[i].length>1){
        str.push(arr[i])
    }else {
        ch.push(arr[i])
    }
}
console.log(str)
console.log(num)
console.log(ch)



