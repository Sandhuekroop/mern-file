console.log("hello world")
let number= 5
number= "hello"
console.log(number)

let firstname="ekroop"
lastname="sandhu"
console.log("hello,Good Morning " +firstname + " " + lastname);

const personarray=["ekroop","shirin","sunandini"]
const numberofperson=personarray.length;
for(let i =0; i<numberofperson;i++){
    console.log(personarray[i]);
}
// program to print biggest number in the array
let min=0;
let numarray=[23,34,45,65,22,26]
for(let i=0;i<numarray.length;i++){
    if(numarray[i]>min){
        min=numarray[i];
    }
    
}
console.log(min)

let allusers=[{
    name:"ekroop",
    gender:"female",
    metadata:{
         age: 20,
         city: "chandigarh"
    }
},{
    name:"shirin",
    gender:"female",
    metadata:{
        age: 21,
        city: "rajpura",}
},{
    name:"abc",
    gender:"male",
    metadata:{
        age: 22,
        city: "xyz"
    }
}
]

for(let i=0;i<allusers.length;i++){
    if(allusers[i].gender=="male"){
        console.log(allusers[i].name)
    }
}
for(let i=0;i<allusers.length;i++){
    if(allusers[i]["metadata"]["age"]=="21"){
        console.log(allusers[i].name)
    }
}

let newarray=['a','b','c','d','e','f'];
console.log("the original array is :")
console.log(...newarray);
let start =0;
let end=newarray.length-1;
for(let i=0;i<Math.floor(newarray.length/2);i++){
   let temp=newarray[start];
   newarray[start]=newarray[end];
   newarray[end]=temp;
   start++;
   end--;
}

console.log("the reversed array is :")
// for(let i=0;i<newarray.length;i++){
//     console.log(newarray[i]);
// }
console.log(...newarray);

let alternativearray=["aa","bb","cc","dd"]
// alternate to reverse an array
for(let i=alternativearray.length-1;i>=0;--i){
    console.log(alternativearray[i]);
}

let numb=Math.floor(5/2);
console.log(numb)
