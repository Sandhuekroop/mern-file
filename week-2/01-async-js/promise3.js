//  simple function

// function kiratAsyncFunction(callback){
//     setTimeout(callback,2000);
// }

// kiratAsyncFunction(function(){
//     console.log("hii")
// });



// intimidating asynch function
function kiratAsyncFunction(){
    let p=new Promise(function(resolve){
        setTimeout(resolve,2000)
    });
    return p;
}
const value= kiratAsyncFunction();
value.then(function(){
    console.log("hi there");
})