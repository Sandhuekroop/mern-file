// ugly way 

// const fs=require('fs');

// // my own asynchronous function 
// function kiratReadsFile(cb){
//     fs.readFile("a.txt","utf-8", function(err,data){
//         cb(data);
//     });
// }

// // callback fucntion to call
// function onDone(data){
// console.log(data)
// }

// kiratReadsFile(onDone);



//  cleaner way(promises)

const fs= require("fs");

// my own asynchronous function
function kiratsReadFile(){
    console.log("inside kiradreadfile")
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("a.txt", "utf-8", function(err,data){
            console.log("before resolve")
            resolve(data);
        });
    })
}
// callback function to call
function onDone(data){
    console.log(data);
}
// kiratsReadFile().then(onDone);
var a= kiratsReadFile();
console.log(a);
a.then(onDone);



// function kiratsReadFile(){
//     return new Promise(function(resolve, reject){
//         fs.readFile("a.txt", "utf-8", function(err,data){
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// kiratsReadFile()
//     .then(onDone)
//     .catch(err => console.log(err));