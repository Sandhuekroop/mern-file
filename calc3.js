function calculateArithematic(a,b,operation){

    function type(a,b){
        return a+b;
    }

    if(operation=="sum"){
        return type(a,b);   // using inner function
    }
    if(operation=="minus"){
        return sub(a,b);
    }

    let ans = type(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const val = calculateArithematic(100,20,"minus");
const val2 = calculateArithematic(100,20,"sum");

console.log(val);
console.log(val2);