// ==== Local Method ====
 var today = new Date()
console.log(typeof today, today);

todayString  = today.toString()
console.log(typeof todayString ,todayString);

var day = todayString.slice(0,3)
var time = todayString.slice(16,24)
var month = todayString.slice(4,7)
var date = todayString.slice(8,10)
var year = todayString.slice(11,15)

console.log("the time is " +time);
console.log("the day is " + day);
console.log("the date is " +date);
console.log("the month is " + month);
console.log("the year is " + year);

// ==== Professional Method ====

//  WEEK
var today = new Date ()
var dayName =[ "monday","tuesday","wednesday","thursday","friday","saturday","nday"];
var day = today.getDay()

console.log(dayName[day]);

// MONTH
var today = new Date()
var month = today.getMonth()
var monthNames =["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
var getMonth = monthNames[month]

console.log(getMonth);

console.log(today.getDate());
console.log(today.getFullYear());
console.log("hours",today.getHours());
console.log("minutes",today.getMinutes());
console.log("seconds",today.getSeconds());
console.log("miliSeconds",today.getMilliseconds());

// Ramadan date 
var ramadan = new Date ("february 7,2027")
var dayName = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var day = dayName [ramadan.getDay()]
console.log(day);

//  How many miliseconds are left in Ramadan 
var today = new Date()
var ramadan = new Date ("february 7,2027")
var todayMili = today.getTime()
ramadanMili = ramadan.getTime()

var diff  = ramadanMili - todayMili
var sec = diff/1000
var min = sec /60
var hours = min/60
var days = hours/24
var months = days/30
console.log(Math.floor(months));
