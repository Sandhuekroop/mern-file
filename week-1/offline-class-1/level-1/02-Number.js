function explainParseInt(value){
    console.log("original value: ",value);
   let result= parseInt(value);
   console.log("result after parseInt: ",result);
}
console.log(explainParseInt("12"));
console.log(explainParseInt("12.34"));
console.log(explainParseInt("42px"));

console.log(parseInt("12"));
console.log(parseInt("12.34"));
console.log(parseInt("42px"));

console.log(parseFloat("12"));
console.log(parseFloat("12.34"));
console.log(parseFloat("42px"));