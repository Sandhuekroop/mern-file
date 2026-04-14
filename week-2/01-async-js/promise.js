
// promise have 3 states : pending,resolved and rejected 

var d= new Promise(function(resolve){
    setTimeout(function(){
        
        resolve("hiii");
    },1000)

});

function callback(){
    console.log(d);
}
// console.log(d);
// d.then(callback);



let p = new Promise(function(resolve){
    resolve("hi there");
});
p.then(function(){
    console.log(p);
})

