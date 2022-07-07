// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day/time is displayed at the top of the calendar
// moment.js Activity 25-26
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// create timeblocks from 9-17 in html using jQuery
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// if else statement that compares actual time with timeblocks and sets color
// WHEN I click into a timeblock
// event listener (on)
// Activity 3-4
// THEN I can enter an event
// text box
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// button to save content
// WHEN I refresh the page
// THEN the saved events persist
// save to local storage



// display current day/time
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

var currentHour = moment().format("H");

// for loop for all work hours
for (let i = 9; i <= 17; i++) {
    // pull id and add event listener
    $("#save"+i).on('click', function () {
        var textToSave = $("#block"+i).val();
        // save to local storage
        localStorage.setItem("text"+i, textToSave);
    })
    // using the same method .val but to page
    var textToPage = localStorage.getItem("text"+i);
    $('#block'+i).val(textToPage)

    if(currentHour > i) {
        $("#block"+i).addClass("past");
    }

    if(currentHour == i) {
        $("#block"+i).addClass("present");
    }

    if(currentHour < i) {
        $("#block"+i).addClass("future");
    }
}
