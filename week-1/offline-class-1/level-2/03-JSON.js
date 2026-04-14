function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

// earlier
const users={
    name:"ekroop",
    age: 22,
    gender:"female"
}
console.log(users["name"]);

// suppose we want to send this data to someone you would convert this to string 
const user='{"name":"ekroop", "age":21 }'; 
 // this is a string and we cannot access the properties of this string like users["name"] because this is not a javascript object this is a string

// console.log(user["name"]);  
// this will give undefined because this is a string and we cannot access the properties of this string like users["name"] because this is not a javascript object this is a string

// JSON.parse
// JSON.stringify

const user1=JSON.parse(user);
console.log(user1["name"]);  // this will give ekroop because we have converted the string into javascript object using JSON.parse() method and now we can access the properties of this object like user1["name"] because this is a javascript object now

const finalstring=JSON.stringify(users);
console.log(finalstring);
console.log(finalstring["name"]);  // this will give undefined because this is a string and we cannot access the properties of this string like finalstring["name"] because this is not a javascript object this is a string





// but suppose we want to send this data to the server then we have to convert this into JSON string and then send it to the server and when we receive the data from the server we have to convert it back into javascript object using JSON.parse() method
// const jsonString=JSON.stringify(users);
// console.log(jsonString);
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);

