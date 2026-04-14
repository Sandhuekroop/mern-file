
const dogo = {
    name: "doggie",
    legCount: 2,
    speaks: "bhow bhow"
}
const cat = {
    name: "cat",
    legCount: 4,
    speaks: "meow meow"
}
function printStr(animal) {
    console.log("animal " + animal["name"] + " " + animal["speaks"])
}


// animal x bhow bhow with 2 legs
// console.log("animal "+ dog["name"] + " " + dog["speaks"]) 
// console.log("animal "+ cat["name"] + " " + cat["speaks"])
printStr(dogo);
printStr(cat);

// class,objects
class Animal {
    constructor(name, legCount,speaks) {
        this.name = name;
        this.legcount = this.legcount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal ")
    }
    speak() {
        console.log("hii there " + this.speaks);
    }
}
// dont do the below thing
let dog2 = {
    name: "doggie",
    legCount: 2,
    speaks: "bhow bhow"
}
console.log(Animal.myType());  // calling static function without creating object

// do the below thing as the below is creating an object using class and we can create multiple objects using the same class
let dog = new Animal("dog", "4", "bhow bhow");  // creating an object using class
let cat1 = new Animal("cat", "4", "meow meow");
cat1.speak();  //call function on object
dog.speak(); 

