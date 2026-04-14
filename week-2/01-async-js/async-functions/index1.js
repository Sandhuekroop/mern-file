// console.log("hii");

// setTimeout(function timeout(){
//     console.log("click the button")
// },5000);

// let a=0;
// for(let i=0; i<10;i++){
//     a=a+1;
// }
// console.log(a);


console.log("hi there");

setTimeout(function(){
    console.log("from inside async function after 10 seconds");
},10000);

setTimeout(function(){
    console.log("from inside async function after 20 seconds");
},20000);

let a=0;
for(let i=0; i<10;i++){
    a=a+1;
}
console.log(a);