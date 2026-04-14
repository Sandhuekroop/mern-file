// length of the string
function getLength(str){
    console.log("original string: ",str);
    console.log("length of the string: ",str.length);
}
getLength("hello world");

// indexOf   -1 if not present
function findIndexOf(str,target){
    console.log("original string: ",str);
    console.log("index: ", str.indexOf(target));

}
findIndexOf("hello world", "wor");

// lastIndexOf
function findLastIndexOf(str,target){
    console.log("original string: ",str);
    console.log("last index: ", str.lastIndexOf(target));
}
findLastIndexOf("hello world world", "o");

// slice 
function sliceString(str,start,end){
    console.log("original string: ",str);
    console.log("sliced string: ", str.slice(start,end));
}
sliceString("hellokk world", 0,5);  // doesnt include last index but till last index 
sliceString("hellokk world", 6); // from index 6 to end of the string
let ans = "ekroop sandhu".slice(0,5);
console.log(ans);

//  substr --old
const value="tejinder singh";
let ans1=value.substr(0,5);  // it starts from zero and takes 5 characters
let ans2=value.substr(2,3);  // it starts from index 2 and takes 3 characters
let ans3=value.slice(2,5); 
console.log(ans1);
console.log(ans2);
console.log(ans3);

//  creating slice on my own

function cutIt(str,start,end){
    let newStr=" ";
    for(let i=0;i<str.length;i++){
        if(i>=start && i<end){
            newStr=newStr+str[i];
        } 
    }
    return newStr;
}
console.log(cutIt("hellokk world", 0,5));  // doesnt include last index but till last index

// replace
const str="hii world";
console.log(str.replace("world","javascript"));

// split
console.log("split: ");
const str1="hi my name is ekroop";
const words=str1.split(" ");
const str2="hi,my,name,is,ekroop";
const words2=str2.split(",")
console.log(words);
 console.log(words2);


 console.log("trim :")
// trim
const value1="  ekroop sandhu   ";
console.log(value1.trim());

console.log("toUpperCase :")
// toUpperCase
const value2="ekroop sandhu";
console.log(value2.toUpperCase());
console.log("toLowerCase :")
// toLowerCase
const value3="EKROOP SANDHU";
console.log(value3.toLowerCase());