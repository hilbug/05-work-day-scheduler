$(document).ready(function() {
    
    // Today's date for jumbotron
    let todaysDate = moment();
    $("#currentDay").text(todaysDate.format("dddd | MMMM Do | YYYY"));

    // Hours for scheduler
    const workHours = [8,9,10,11,12,13,14,15,16,17,18];

    // Function to create rows for schedule
    function createScheduler(hour) {
        for (let i = 0; i < workHours.length; i++) {
            
            // create div with class row 
            const rowDiv = $("<div>").addClass("row");

            // create div with classes col-1, time-block, hour for hour display
            const hourDiv = $("<div>").addClass("col-1 time-block hour");
            
            // create div with classes col-10 for scheduler text area 
            const textDiv = $("<textarea>").addClass("col-10")
                // how do we get the hour to show up with AM/PM?
            
            // create div with classes co1-1 saveBtn for save button
            const saveDiv = $("<div>").addClass("col-1 saveBtn");

            // append all to the container?
            $(".container").append(rowDiv.append(hourDiv,textDiv,saveDiv));
        }
    }

    // call createScheduler based on page load
    $( window ).on("load", createScheduler());
    console.log("window loaded");


    // PseudoCode

    // createScheduler
        // how do we get the array hour value into the time-block?

    // format rows based on current time
        // if current time is greater than workHours, set class .past
        // else if current time is less than workHours, set class .future
        // else set class .present
    
    // save text area to local storage
        // when user clicks save, text is stored in local storage
        // user story: the saved events persist - is this sessionStorage instead?
    
    
    
});