//define shop opening hours in an object
const openHours = [
    { day: "Tuesday", openH: 9, closeH: 17, closeM: 30 },
    { day: "Wednesday", openH: 9, closeH: 17, closeM: 30 },
    { day: "Thursday", openH: 9, closeH: 17, closeM: 30 },
    { day: "Friday", openH: 9, closeH: 19, closeM: 0 },
    { day: "Saturday", openH: 9, closeH: 17, closeM: 0 },
]
//retrieve day of week, hour, and minutes
//0Sun 1Mon 2Tues 3Weds 4Thurs 5Fri 6 Sat
const today = new Date();
let d = today.getDay();
let h = today.getHours();
let m = today.getMinutes();

//function to compare current time to opening hours and return text response on page - tues/weds/thurs
function midWeekOpening() {
    if ((h >= openHours[0].openH && h <= openHours[0].closeH) || (h === openHours[0].closeH && m < openHours[0].closeM)) {
        document.getElementById("timeMid").innerText = "open until 5.30pm";
        document.getElementById("timeBot").innerText = "today";
    } else {
        document.getElementById("timeMid").innerText = "closed until";
        if (h <= openHours[0].openH) {
            document.getElementById("timeBot").innerText = "9am today";
        } else {
            document.getElementById("timeBot").innerText = "9am tomorrow"
        }
    }
}
//function to compare current time to opening hours and return text response on page - fri
function fridayOpening() {
    if ((h >= openHours[3].openH && h <= openHours[3].closeH) || (h === openHours[3].closeH && m < openHours[3].closeM)) {
        document.getElementById("timeMid").innerText = "open until 7pm";
        document.getElementById("timeBot").innerText = "today";
    }
    else {
        document.getElementById("timeMid").innerText = "closed until";
        if (h <= openHours[0].openH) {
            document.getElementById("timeBot").innerText = "9am today";
        } else {
            document.getElementById("timeBot").innerText = "9am tomorrow"
        }
    }
}
//function to compare current time to opening hours and return text response on page - sat
function saturdayOpening() {
    if ((h >= openHours[4].openH && h <= openHours[4].closeH) || (h === openHours[4].closeH && m < openHours[4].closeM)) {
        document.getElementById("timeMid").innerText = "open until 5pm";
    } else {
        document.getElementById("timeMid").innerText = "closed until";
        if (h <= openHours[0].openH) {
            document.getElementById("timeBot").innerText = "9am today";
        } else {
            document.getElementById("timeBot").innerText = "9am Tuesday"
        }
    }
}

//select function or rsponse based on day
switch (d) {
    case 2:
    case 3:
    case 4:
        midWeekOpening(h, m);
        break;
    case 5:
        fridayOpening(h, m);
        break;
    case 6:
        saturdayOpening(h, m);
        break;
    case 0:
        //sunday response
        document.getElementById("timeMid").innerText = "closed until";
        document.getElementById("timeBot").innerText = "9am Tuesday";
        break;
    case 1:
        //monday response
        document.getElementById("timeMid").innerText = "closed until";
        document.getElementById("timeBot").innerText = "9am Tomorrow";
        break;
}
