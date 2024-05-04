// Date and Time

let myDate = new Date()

// console.log(typeof myDate);     //you want to create a Date object, you should use new Date() instead.
// console.log(myDate);
// console.log(myDate.toString());

// let newDate = new Date(2024, 4, 5)
// let newDate = new Date(2024, 4, 5, 9, 30)
// let newDate = new Date("2024-4-5")
let newDate = new Date("04-21-2024")

// console.log(newDate.toLocaleString())

let timeStamp = Date.now()  //this give us time in milliseconds

// console.log(timeStamp);
// console.log(newDate.getTime());
// console.log(Math.round(Date.now()/1000));  //gave time in seconds

console.log(myDate.getHours());
console.log(myDate.getDay());
