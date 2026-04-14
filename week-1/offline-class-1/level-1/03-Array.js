
// Array: push(), pop(), shift(), unshift(), splice(), slice(),concat(), forEach(), map(),filter(),reduce(), find(), sort() 

// push() - adds an element at the end of the array

// function pushExample(arr, element){
//     console.log("original array: ", arr);
//     arr.push(element);
//     console.log("array after push: ", arr);
// }
// pushExample([1,2,3], 4);

// // pop() - removes the last element of the array
// function popExample(arr){
//     console.log("original array: ", arr);
//     arr.pop();
//     console.log("array after pop: ", arr);
// }       
// popExample([1,2,3,4]);

// // shift() - removes the first element of the array
// function shiftExample(arr){
//     console.log("original array: ", arr);
//     arr.shift();
//     console.log("array after shift: ", arr);
// }
// shiftExample([1,2,3,4]);

// // unshift() - adds an element at the beginning of the array
// function unshiftExample(arr, element){
//     console.log("original array: ", arr);
//     arr.unshift(element);
//     console.log("array after unshift: ", arr);
// }
// unshiftExample([1,2,3], 0); 

// // concat() - merges two or more arrays and returns a new array
// const initialArray = [1,2,3];
// const secondArray = [4,5,6];
// console.log("original arrays: ", initialArray, secondArray);
// const finalArray = initialArray.concat(secondArray);
// console.log("array after concat: ", finalArray);
// console.log("original array after concat: ", initialArray); // original array is not changed

// for(let i=0;i<secondArray.length;i++){
//     initialArray.push(secondArray[i]);
// }
// console.log("array after manual concat: ", initialArray);

// // forEach() - executes a provided function once for each array element

// function logThing(str){
//     console.log(str + " is the string");
// }

// const initarray=[1,2,3,4];
// console.log("the init array is: ", initarray);
// // [1,2,3] 
// initarray.forEach(logThing);

// // the above function do the below thing
// // logThing(1);
// // logThing(2);
// // logThing(3);
// // logThing(4);
// // logThing(5);
// // logThing(6);

// // callback function - a function that is passed as an argument to another function and is executed after some operation is completed

// function log1(){
//     console.log("log1 called");
// }
// function log2(){
//     console.log("log2 called");
// }
// function logWhatsPresent(fn){
//     fn();
// }
// logWhatsPresent(log1);


// // callbacks,map ,filter, find , sort


// // forEach()
// function forEachExample(arr) {
//   console.log("Original Array:", arr);

//   arr.forEach(function(item, index) {
//     console.log(item, index);
//   });
// }
// forEachExample([1, 2, 3]);

// // map()
// function mapExample(arr) {
//   console.log("Original Array:", arr);

//   let newArr = arr.map(function(item) {
//     return item * 2;
//   });
//   console.log("After map:", newArr);
// }
// mapExample([1, 2, 3]);

// // filter()
// function filterExample(arr) {
//   console.log("Original Array:", arr);

//   let newArr = arr.filter(function(item) {
//     return item > 3;
//   });
//   console.log("After filter:", newArr);
// }
// filterExample([1, 2, 3, 4, 5]);

// // find()
// function findExample(arr) {
//   console.log("Original Array:", arr);

//   let found = arr.find(function(item) {
//     return item > 3;
//   });
//   console.log("After find:", found);
// }
// findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);

let arr = [1, 10, 2];
arr.sort();
console.log(arr); // [1, 10, 2] - because sort() converts elements to strings and compares them lexicographically(take string representation) as it is not given a compare function. So "10" comes before "2" in lexicographical order.

// 1. reverse sort
let arr1 = [1, 5, 3, 2];

arr1.sort((a, b) => b - a);

console.log(arr1); // [5, 3, 2, 1]

//2. Sorting strings by length
let words = ["apple", "hi", "banana", "cat"];

words.sort((a, b) => a.length - b.length);

console.log(words); 
// ["hi", "cat", "apple", "banana"]

// 3. Sorting objects
let students = [
  { name: "Aman", marks: 80 },
  { name: "Riya", marks: 95 },
  { name: "John", marks: 70 }
];

students.sort((a, b) => a.marks - b.marks);

console.log(students);

// 4. Sort by name (alphabetically)
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);

// 5. Even numbers first, then odd
let numbers = [5, 2, 8, 1, 4];
numbers.sort((a,b)=>{
  if(a%2==0 &&b%2!=0) return -1; // a is even and b is odd, a should come first
  if(a%2!=0 &&b%2==0) return 1; // a is odd and b is even, b should come first
  return a-b; // if both are even or both are odd, sort in ascending order
})
console.log(numbers); // [2, 8, 4, 5, 1]

// 🔹 6. Closest to a number (VERY INTERESTING)

// Sort based on closeness to 10:
let arr3 = [1, 8, 12, 5, 20];

arr3.sort((a, b) => Math.abs(a - 10) - Math.abs(b - 10));

console.log(arr3);
// [8, 12, 5, 1, 20]

// sorting dates
let arr4 = [1, 8, 12, 5, 20];

arr4.sort((a, b) => Math.abs(a - 10) - Math.abs(b - 10));

console.log(arr4);
// [8, 12, 5, 1, 20]


// 8. Multi-level sorting (IMPORTANT)

// Sort by marks, then by name:

let students1 = [
  { name: "Riya", marks: 90 },
  { name: "Aman", marks: 80 },
  { name: "John", marks: 90 },
  { name: "Zara", marks: 70 },
  { name: "Ankit", marks: 80 },
  { name: "Bob", marks: 90 }
];
students1.sort((a, b) => {
  if (a.marks !== b.marks) {
    return a.marks - b.marks;
  }
  return a.name.localeCompare(b.name);
});
console.log(students1);

