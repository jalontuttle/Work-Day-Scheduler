//Creating a timer
var timer = $("#currentDay");

$(document).ready(function() {
    function updateTime() {
    var now = moment();
    var rightNow = now.format('MMMM Do YYYY, h:mm:ss a');
    
    timer.text(rightNow);
    }   

    setInterval(updateTime, 1000);
    updateTime();

    console.log(updateTime);

    //Add local storage for save buttons
    $("#hour7 .userInput").val(localStorage.getItem("hour7"));
    $("#hour8 .userInput").val(localStorage.getItem("hour8"));
    $("#hour9 .userInput").val(localStorage.getItem("hour9"));
    $("#hour10 .userInput").val(localStorage.getItem("hour10"));
    $("#hour11 .userInput").val(localStorage.getItem("hour11"));
    $("#hour12 .userInput").val(localStorage.getItem("hour12"));
    $("#hour1 .userInput").val(localStorage.getItem("hour1"));
    $("#hour2 .userInput").val(localStorage.getItem("hour2"));
    $("#hour3 .userInput").val(localStorage.getItem("hour3"));
    $("#hour4 .userInput").val(localStorage.getItem("hour4"));
    $("#hour5 .userInput").val(localStorage.getItem("hour5p"));

    $(".save").on("click", function () {
        //get nearby values.
        console.log("hey");
        var text = $(this).siblings(".userInput").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
        
    });
    
    //Setting a function to look at each row to see if it is past, present or future
    function findTime(){
        var thisHour = moment().hour();

        $(".time-block").each(function () {
            hour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(thisHour, hour);

            if( hour < thisHour){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } 
            else if (hour == thisHour){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("past");
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    findTime();
})
