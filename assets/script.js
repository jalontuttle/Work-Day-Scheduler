//Creating a timer
var timer = $("#currentDay");

function updateTime() {
    var now = moment();
    var rightNow = now.format('MMMM Do YYYY, h:mm:ss a');
    
    timer.text(rightNow);
}

setInterval(updateTime, 1000);
updateTime()

console.log(updateTime);