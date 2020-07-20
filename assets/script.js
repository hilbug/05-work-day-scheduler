$(document).ready(function() {
    
    // Today's date for jumbotron
    let todaysDate = moment();
    $("#currentDay").text(todaysDate.format("dddd | MMMM Do | YYYY"));

    
});