// Display Date in the Top Jumbotron 

$(document).ready(function(){


// Display Date in the Top Jumbotron 

    var currentDay = $("#currentDay");
    var curDate = moment().format('MMMM Do YYYY');
    currentDay.text(curDate);

// creating the Time Blocks when page loads

    for (var i = 9; i <= 17; i++){
        $('.container').append(`<div class="row time-block" id=block${i}> 
        <div class="col-2 hour" id=${i}hour> <p>Hrs${i}</p> </div>
        <textarea class="col-8 description" id=desc${i}></textarea> 
        <button class="col-2 saveBtn i far fa-save" id=btn${i}> </i></button> 
        </div>`);
        }


    // Color Coding according to current time 

    // saving the variable from text box to local storage variable 

    $( "#btn9" ).click(function() {
        // alert( "Handler for .click() called." );
        var tBdesc9 = $("#desc9").val();
        localStorage.setItem("taskfor9AM", tBdesc9);
      });




//     window.onload = function(){
//         var val = localStorage.getItem('value'); // or localStorage.value
  
//         if(val == null)
//             val = "First try";
  
//        document.getElementById("myData").value = val;
//   }


    });