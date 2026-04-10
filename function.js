// function sum(a,b){
//     // do things with the input and then returns an output
//     const sumvalue=a+b;
//     return sumvalue;
// }
// const value=sum(1,2);
// console.log(value);

// const val1=sum(10,20);
// const val2=sum(30,val1);
// console.log(val2)


// let sum=0;
// for (let i=0;i<1000000000000;i++){
//     sum+-i;
// }
// console.log(sum);


// callback   example1
// function sum(num1,num2){
//     let result=num1+num2;
//     displayresult(result);
// }

// function displayresult(data){
//     console.log("result of the sum is "+ data);
// }

// function displayresultpassive(data){
//     console.log("sum's result is :"+ data);

// }

//you are only allowed to call one function after tgus 
//  how will you displayresult of the sum  
//  const ans=sum(1,2);
//  displayresult(ans);


// ## callback continue of previous
function sum(num1,num2,fnToCall){
    let result=num1+num2;
    fnToCall(result);
}

function displayresult(data){
    console.log("result of the sum is "+ data);
}

function displayresultpassive(data){
    console.log("sum's result is :"+ data);

}
const ans=sum(1,2,displayresult);