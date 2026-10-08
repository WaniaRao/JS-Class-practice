const moment = require('moment');

console.log("=== Moment.js Relative Time Methods Examples ===\n");

// Question 1: 
const pastDate1 = moment([2007, 0, 29]);
console.log("1. pastDate.fromNow():", pastDate1.fromNow()); 


// Question 2: 
const pastDate2 = moment([2007, 0, 29]);
console.log("2. pastDate.fromNow(true):", pastDate2.fromNow(true)); 


// Question 3: 
var a3 = moment([2007, 0, 28]);
var b3 = moment([2007, 0, 29]);
console.log("3. a.from(b):", a3.from(b3)); 


// Question 4: 
var a4 = moment([2007, 0, 28]);
console.log("4. a.from([2007, 0, 29]):", a4.from([2007, 0, 29])); 


// Question 5: 
var a5 = moment([2007, 0, 28]);
console.log("5a. Native Date pass karke:", a5.from(new Date(2007, 0, 29))); // "a day ago"
console.log("5b. String pass karke:", a5.from("2007-01-29"));               // "a day ago"

// Question 6:
const pastDate6 = moment([2007, 0, 29]);
console.log("6. pastDate.toNow():", pastDate6.toNow()); 


// Question 7:
const pastDate7 = moment([2007, 0, 29]);
console.log("7. pastDate.toNow(true):", pastDate7.toNow(true)); 


// Question 8:
var a8 = moment([2007, 0, 28]);
var b8 = moment([2007, 0, 29]);
console.log("8a. a.to(b):", a8.to(b8));              // Output: "in a day"
console.log("8b. a.to(string):", a8.to("2007-01-29")); // Output: "in a day"