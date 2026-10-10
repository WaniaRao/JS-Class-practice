function getCurrentTime()
 {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    console.log(`Time: ${hours}:${minutes}:${seconds}`);
}
getCurrentTime();

// Greeting Function
function greetUser(name) {
    console.log("Hello! Welcome to our application." + name);
}
greetUser("John Doe");
greetUser("Jane Smith");
greetUser("Bob Johnson");

// Addition and Subtraction
function sum(a, b, c) {
    console.log("The sum is:", a + b + c);
}
    function sub(a, b) {
    console.log("The difference is:", a - b );
}
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var num3 = +prompt("Enter the third number:");
sum(num1, num2, num3);
sub(num1, num2);

// Multiplication
function multiply(a, b) {
    console.log("The product is:", a * b);
}
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
multiply(num1, num2);

// Multiplication
function multiply(a, b) {
    console.log("The product is:", a * b);
}

num1 = +prompt("Enter the first number:");
num2 = +prompt("Enter the second number:");
multiply(num1, num2);

// Division
function divide(a, b) {
    if (b !== 0) {
        console.log("The quotient is:", a / b);
    } else {
        console.log("Error: Division by zero is not allowed");
    }
}

num1 = +prompt("Enter the first number:");
num2 = +prompt("Enter the second number:");
divide(num1, num2);

// Percentage Calculator
function percentageCalculator(sub1, sub2, sub3) {
    var per = ((sub1 + sub2 + sub3) / 300) * 100;
    console.log("Percentage:", per.toFixed(2) + "%");
}

var sub1 = +prompt("Enter the marks of subject 1:");
var sub2 = +prompt("Enter the marks of subject 2:");
var sub3 = +prompt("Enter the marks of subject 3:");

// Fixed: Function call added
percentageCalculator(sub1, sub2, sub3);

function titleCase(str) {

var splittedstr=str.split(" ");
for (var i = 0; i < splittedstr.length; i++) {
    var firstLetter = splittedstr[i].charAt(0).toUpperCase();
    var restOfWord = splittedstr[i].slice(1).toLowerCase();
   console.log(firstLetter + restOfWord);
}
console.log(splittedstr);
}
titleCase("hello there! this is a test string.");
