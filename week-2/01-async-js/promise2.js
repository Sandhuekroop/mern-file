function kiratasyncfunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}
// const value=kiratasyncfunction();
// value.then(function(data){
//     console.log(data);
// })

console.log("start");

const value = kiratasyncfunction();

value.then(function(data){
    console.log(data);
});

console.log("end");