$(document).ready(function() {
    
    // moment date
    const todaysDate = moment();
    console.log(todaysDate.toString());
    
    // Today's date for jumbotron
    $("#currentDay").text(todaysDate.format("dddd | MMMM Do | YYYY"));
    console.log($("#currentDay").text(todaysDate.format("dddd | MMMM Do | YYYY")));

    // Hours for scheduler
    //const workHours = [8,9,10,11,12,13,14,15,16,17,18];

    // Save icon - creating out there and appending wtihin function does not work. only in function does it work.
    //let saveBtnIcon = $("<i>").addClass("fas fa-save fa-4x");
    //let saveBtnIcon = $("<button>").addClass("fas fa-save fa-4x");

    // Function to create rows for schedule
    function createScheduler(date) {

        // Set start time at 12am
        date = moment(date).hour(0);

        for (let i = 0; i < 24; i++) {
            
            // Row: create div with class row 
            const rowDiv = $("<div>").addClass("row");

            // Hour: create div with classes col-1, time-block, hour for hour display
            const hourDiv = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(date.format("H a"));
            
            // Text box: create div with classes col-10 for scheduler text area 
            const textDiv = $("<textarea>").addClass("col-10 time-block")
            
            // Save button: create div with classes co1-1 saveBtn for save button
            const saveDiv = $("<button>").addClass("col-1 btn saveBtn");
            let saveBtnIcon = $("<i>").addClass("fas fa-save fa-3x");

            // increment starting hour
            date.add(1, "hour");
            
            // append all to the container?           
            $(".container").append(rowDiv.append(hourDiv,textDiv,saveDiv.append(saveBtnIcon)));

            if (todaysDate.isAfter(date, "hour")) {
                textDiv.addClass("past");
            } else if (todaysDate.isBefore(date, "hour")) {
                textDiv.addClass("future");
            } else {
                textDiv.addClass("present");
            }
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