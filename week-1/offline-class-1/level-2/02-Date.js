function dateMethods(){
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    //get various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); //months are zero indexed so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

    //setting components of the date 
    currentDate.setFullYear(2022);
    console.log("After setFullYear :", currentDate);

    currentDate.setMonth(5); // setting month to June (months are zero indexed)
    console.log("After setMonth :", currentDate);

    // getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());

     const newDate = new Date(2026,3 , 11); // creating a date object for 11th April 2026 (months are zero indexed)
     console.log("New Date:", newDate);

}
// example usage for date methods
dateMethods();

function calculateSum(){
    let a=0;
    for(let i=0;i<1000000;i++){
        a=a+i;
    }
    console.log("sum is: ",a);
    return a;
}
const beforeDate = new Date();
const beforeTimeinMillis = beforeDate.getTime();
calculateSum();
const afterDate = new Date();
const afterTimeinMillis = afterDate.getTime();
console.log("Time taken to execute calculateSum: ", afterTimeinMillis - beforeTimeinMillis, "milliseconds");