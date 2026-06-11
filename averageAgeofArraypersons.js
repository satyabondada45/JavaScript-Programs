let array=[
    {name:"satya",age:20},
    {name:"ramana",age:30},
    {name:"prajwal",age:19}
    ]
let average=0;
let sum=0;
for(let i=0;i<array.length;i++){
   sum+=array[i].age;
  
}
average=sum/array.length;
console.log(average)
