
$(document).ready(function(){

// Displaying the date in the Top Jumbotron 

    var currentDay = $("#currentDay");
    var curDate = moment().format('MMMM Do YYYY');
    currentDay.text(curDate);

// Creating the Time Blocks when page loads

    // var schedArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
    var schedArray = ["9","10","11","12","13","14","15","16","17"];

    for (var i = 0; i < schedArray.length; i++){
            $('.container').append(`<div class="row time-block" id=block${schedArray[i]}> 
            <div class="col-2 hour" id=hour${schedArray[i]}> <p>${schedArray[i]}</p> </div>
            <textarea class="col-8 description" id=${schedArray[i]}></textarea> 
            <button class="col-2 saveBtn i far fa-save" id=btn${schedArray[i]}></i></button> 
            </div>`);
            }

// Color Coding according to current time hour9AM

    // var currentHour = moment().format('h') ;
    // var currentHour = moment().hour();
    var currentHour = 14;

    for (var i = 9; i <= 17; i++){
        if (i == currentHour) {
            $("#"+i).addClass("present");
        } 
        else if (i < currentHour){
            $("#"+i).addClass("past");
        }
        else {
            $("#"+i).addClass("future");
        } 
 }
            
// Load the values from local Storage if exists to the respective textbox

    for (var i = 9; i <= 17; i++){
        $("#"+i).val(localStorage.getItem("btn"+i));
    } 

// Save the values of the textbox to local storage when button is the button is clicked 

    $(".saveBtn").click(function() {
        var boxText = $(this.parentNode.children[1]).val();
        localStorage.setItem($(this).attr("id"), boxText);
      });


});