// create a counter in javascript(count down from 30 to 0)
// let counter = 30;
// let interval = setInterval(function(){
//     console.log(counter);
//     counter--;  
//     if(counter < 0){
//         clearInterval(interval);
//         console.log("Time's up!");
//     }   
// }, 1000);

// let counter =30;
// let interval = setInterval(function(){
//     console.log(counter);
//     counter--;
//     if(counter<0){
//         clearInterval(interval);
//         console.log("Time's up!");
//     }
// },1000)

// ques2:calculate the time it takes between a settimeout call and the innerfunction actually running
const start=Date.now();

setTimeout(function(){
    const end=Date.now();
    console.log("Time taken: " + (end-start) + " milliseconds");
    console.log(start);
    console.log(end);

})

// ques3: create a terminal clock (HH:MM:SS)
function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(updateClock,1000);
