// for loop
for (var i = 0; i < 10; i++) {
    console.log(i,"Wania");
}

// --------increment
for (var i=1; i<=10; i++) {
    console.log(`2 x ${i} = ${2*i}`);
}

// ---------decrement
for (var i=10; i>=1; i--) {
    console.log(i);
}

// --------odd numbers
for (var i = 9; i >= 1; i -= 2) {
    console.log(i);
}

// -------even numbers
for (var i = 10; i >= 2; i -= 2) {
    console.log(i);
}

// Dynamic
var arr =[
     "mango", "banana", "apple", "grapes","orange", 
     "kiwi", "watermelon", "papaya", "pear", "peach"
    ];
for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// -------Pakistan Cities------

var arr1 = [
    // Sindh
  "Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", 
  "Mirpur Khas", "Jacobabad", "Shikarpur",

  // Punjab
  "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Multan", 
  "Bahawalpur", "Sargodha", "Sialkot", "Sheikhupura", "Jhang", 
  "Rahim Yar Khan", "Gujrat", "Sahiwal", "Wah Cantonment", 
  "Kasur", "Okara", "Chiniot",

  // Khyber Pakhtunkhwa (KPK)
  "Peshawar", "Mardan", "Mingora", "Kohat", "Abbottabad", 
  "Dera Ismail Khan", "Swat",

  // Balochistan
  "Quetta", "Gwadar", "Turbat", "Khuzdar", "Sibi",

  // Capital & Territories
  "Islamabad", "Muzaffarabad", "Mirpur"
];
for (var i=0; i<arr1.length; i++) {
    console.log(arr1[i], "is a city of Pakistan");
}

// -----------Includes Method-----------------
var userCity = prompt("Enter a city name:");{

    if (arr1.includes(userCity)) {
        console.log(userCity + " is a city of Pakistan.");
        document.write(userCity + " is a city of Pakistan.");
    } else {
        console.log(userCity + " is not belong to Pakistan.");
      document.write(userCity + " is not belong to Pakistan.");
            
        }
    }
