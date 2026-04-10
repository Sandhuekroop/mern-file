

function calculateArithematic(a,b,arithematicfinalfunction){
    function arithematicfinalfunction(a,b){
       return a+b;
    }
    const ans=arithematicfinalfunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const val=calculateArithematic(100,20,sum);
console.log(val);