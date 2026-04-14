// setTimeout

function greet(){
    console.log("Hello, World!");
}
function greetAlien(){
    console.log("Hello, Alien");
}
setTimeout(greet,1*1000);
setTimeout(greetAlien,3*1000);
setInterval(greet,2*1000); // will run every 2 seconds until we stop it