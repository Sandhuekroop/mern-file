function findSum(n){
    let ans=0;
    for(let i =0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findsumtill100(){
    console.log(findSum(100));
}

// busywaiting
function syncsleep(){
    let a=1;
    for(let i=0;i<1000000000;i++){
        a+=i;
    }
    console.log("Finished busy waiting");
}
// syncsleep();
setTimeout(findsumtill100,1000);
console.log("This will be printed before the sum is calculated");

// common asynch functions in js:
// setTimeout() - executes a function after a specified delay
// setInterval() - executes a function repeatedly at specified intervals
// fetch() - makes an HTTP request and returns a promise that resolves to the response
// fetch()- to fetch some data from an api endpoint 
// fs.readFile() - reads a file and returns its contents (in Node.js)