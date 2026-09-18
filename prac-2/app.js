// ------------------Nested Loops---------------------

// pattern 1
//******
//******
//******
//******
//******
//****** 
for (var i = 1; i <= 6; i++) {

    var stars = "";

    for (var j = 1; j <= 6; j++) {
        stars = stars + "*";
    }

    console.log(stars);
   
}


// pattern 2
// *
// **
// ***
// ****
// *****
// ******
for (var i = 1; i <= 6; i++) {
    var stars = "";

    for (var j = 1; j <= i; j++) {
        stars = stars + "*";
    }

    console.log(stars);
  
}


// pattern 3
// ******
// *****
// ****
// ***
// **
// *
for (var i = 6; i >= 1; i--) {
    var stars = "";

    for (var j = 1; j <= i; j++) {
        stars = stars + "*";
    }

    console.log(stars);
  
}


// Asking user
var lines = +prompt("how many lines do you want?");
var stars = +prompt("How many stars do you want in each line?")
var character =+prompt("Enter the character")
for (var i = 1; i <= lines; i++) {

    var pattern = "";

    for (var j = 1; j <= stars; j++) {
        pattern = pattern + "character";
    }

    console.log(pattern);
    document.write(pattern + "<br>");
}