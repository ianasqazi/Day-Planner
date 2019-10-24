// Display Date in the Top Jumbotron 

$(document).ready(function(){


// Display Date in the Top Jumbotron 

    var currentDay = $("#currentDay");
    var curDate = moment().format('MMMM Do YYYY');
    currentDay.text(curDate);

// creating the Time Blocks when page loads

    // for (var i = 9; i <= 17; i++){
    //     $('.container').append(`<div class="row time-block" id=block${i}> 
    //     <div class="col-2 hour" id=hour${i}> <p>${i}Hrs</p> </div>
    //     <textarea class="col-8 description" id=desc${i}></textarea> 
    //     <button class="col-2 saveBtn i far fa-save" id=btn${i}> </i></button> 
    //     </div>`);
    //     }
    var schedArray = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

    for (var i = 0; i < schedArray.length; i++){
            $('.container').append(`<div class="row time-block" id=block${schedArray[i]}> 
            <div class="col-2 hour" id=hour${schedArray[i]}> <p>${schedArray[i]}</p> </div>
            <textarea class="col-8 description" id=desc${schedArray[i]}></textarea> 
            <button class="col-2 saveBtn i far fa-save" id=btn${schedArray[i]}></i></button> 
            </div>`);
            }

    // Color Coding according to current time 

            

    // saving the variable from text box to local storage variable 
    $(".saveBtn").click(function() {
        // var comment = $.trim($("#comment").val());

        var boxText = $(this.parentNode.children[1]).val();
        console.log(boxText);
        localStorage.setItem($(this).attr("id"), boxText);
        // localStorage.setItem($(this).attr("id"), $(this).val());

        

        // var closestElement = this.closest();
        // console.log (closestElement);

        // console.log($(this).find(".description textarea"));

        // $(".time-block").each(function(){
        //     $(this).find(".description textarea").val(timeTrackObject[$(this).attr("data-time")].value);
        //   });


        
        // var tBdesc9 = $("#desc9").val();
        // localStorage.setItem("taskfor9AM", tBdesc9);
      });




//     window.onload = function(){
//         var val = localStorage.getItem('value'); // or localStorage.value
  
//         if(val == null)
//             val = "First try";
  
//        document.getElementById("myData").value = val;
//   }


    });