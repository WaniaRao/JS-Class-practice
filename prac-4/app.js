// eid date
var today = new Date()
var eid = new Date("March 21,2026")
console.log(today);
console.log(eid);
var msToday = today.getTime()
var msEid = eid.getTime()
var diff = msToday - msEid
var months =Math.floor(diff/(1000 * 60 * 60 * 24 * 30))

console.log(months);

// user age
var today = new Date()
var userDob = prompt("Enter your DOB here MM-DD-YYYY")
var dob = new Date(userDob)
var msToday = today.getTime()
var msDob = dob.getTime()
var diff = msToday - msDob
var years = Math.floor(diff/ (1000*60*60*24*30*12))

console.log(years);
document.write(years + " Years old");

var today = new Date()
var hours = today.getHours()
var ampm

if (hours >= 12) {
    ampm = "PM"
    if (hours > 12) {
        hours = hours - 12
    }
} else {
    ampm = "AM"
    if (hours == 0) {
        hours = 12
    }
}

console.log(hours + " " + ampm)
    
 var today = new Date ("24-nov-2024")
    console.log(today);
    
 var randomDate = new Date ("24-nov-2024 16:20:00")
 var today = new Date()
var diff = Math.floor((today - randomDate) / 1000
)
    console.log(diff);

// just now, mins ago, hours ago, days ago, weeks ago, months ago, years ago

    if (diff < 60) {
        console.log("Just now");

    }else if (diff >=60 && diff < 3600) {
        var mins = Math.floor(diff / 60)
        console.log(mins + " Mins ago");

    }else if (diff >= 3600 && diff < 86400) {
        var hours = Math.floor(diff / 3600)
        console.log(hours + " Hours ago");

    }else if (diff >= 86400 && diff < 604800) {
        var days = Math.floor(diff / 86400)
        console.log(days + " Days ago");

    }else if (diff >= 604800 && diff < 2419200) {
        var weeks = Math.floor(diff / 604800)
        console.log(weeks + " Weeks ago");

    }else if (diff >= 2419200 && diff < 29030400) {
        var months = Math.floor(diff / 2419200)
        console.log(months + " Months ago");

    }else if (diff >= 29030400) {
        var years = Math.floor(diff / 29030400)
        console.log(years + " Years ago");
    }e
