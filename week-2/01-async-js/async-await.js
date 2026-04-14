// normal syntax

// function kiratAsycFunction(){
//     let p= new Promise(function(resolve){
//         // do some async logic here
//         resolve("hi there")
//     });
//     return p;
// }

// function main(){
//     kiratAsycFunction().then(function(value){
//         console.log(value);
//     });
// }
// main();

// async/await syntax

function kiratAsyncFunction(){
    let p= new Promise(function(resolve){
        // do some asymc logic here
        setTimeout(function(){
            
            resolve("hi there!!")
        },3000)
    })
    return p;
}

async function main(){
    //   no callbacks , no .then syntax
    // kiratAsyncFunction().then(function(value){
    //     console.log(value);
    // })   

    const value= await kiratAsyncFunction();   // wait here till the kiratAsyncFunction is resolved
    console.log("hi there....")
    console.log(value);
}
main();
console.log("after main ")
