// Timetable Form //
var acc1 = document.getElementsByClassName("accordionOne");
var j;

for (j = 0; j < acc1.length; j++) {
    acc1[j].onclick = function(){
        /* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
// Top Line - Current Date //
var date =  new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
// Date Section
if (!Date.now) {
    Date.now = function() {
        return new Date().getTime();
    }
}
var theDate = Date.now();

document.getElementById('date1').innerText = getTheDate(theDate);

document.getElementById('prev').addEventListener("click", function() {
    theDate -= 86400000;
    document.getElementById('date1').innerText = getTheDate(theDate)
});
document.getElementById('next').addEventListener("click", function() {
    theDate += 86400000;
    document.getElementById('date1').innerText = getTheDate(theDate)
});

function getTheDate(getDate) {
    var days = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    var months = ["January", "February", "March",
        "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    var theCDate = new Date(getDate);
    return days[theCDate.getDay()] + ', ' + theCDate.getDate() + ' ' + months[theCDate.getMonth()] + ' ' +
        theCDate.getFullYear();
}
// Form Section - Open button (+) //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
