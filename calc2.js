function calculateArithematic(a,b,type){

    function type(a,b){
        return a+b;
    }
  

    if(type=="sum"){
        const value=sum(a,b);
        return value;
    }
    if(type=="minus"){
        const value=sub(a,b);
        return value;
    }
      let ans=type(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const val=calculateArithematic(100,20,"minus");
const val2=calculateArithematic(100,20,sum);
console.log(val);
console.log(val2);