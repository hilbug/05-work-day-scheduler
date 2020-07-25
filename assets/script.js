$(document).ready(function() {
    
    // moment date
    const todaysDate = moment();
    
    // Today's date for jumbotron
    $("#currentDay").text(todaysDate.format("dddd | MMMM Do YYYY | hh:mm a"));

    // Function to create rows for schedule
    function createScheduler(date) {

        // Set start time at 8am
        date = moment(date).hour(8);

        for (let i = 0; i < 12; i++) {
            
            // Bootstrap Row: create div with class row 
            const rowDiv = $("<div>").addClass("row").attr("id", `row${i}`);

            // Hour: create div with classes col-1, time-block, hour for hour display
            const hourDiv = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(date.format("H a")).attr("id", `hour${i}`);
            
            // Text box: create div with classes col-10 for scheduler text area 
            const textDiv = $("<textarea>").addClass("col-10 time-block text-box save-block").attr("id", `text${i}`);
            
            // Save button: create div with classes co1-1 saveBtn for save button
            const saveDiv = $("<div>").addClass("col-1 d-flex align-items-center justify-content-center saveBtn save-block");
            let saveBtnIcon = $("<button>").addClass("btn fas fa-save fa-lg save-button").attr("id", i).attr("title", "Save");
            
            // append all to the container           
            $(".container").append(rowDiv.append(hourDiv,textDiv,saveDiv.append(saveBtnIcon)));

            // color code textDiv based on current time
            if (todaysDate.isAfter(date, "hour")) {
                textDiv.addClass("past");
            } else if (todaysDate.isBefore(date, "hour")) {
                textDiv.addClass("future");
            } else {
                textDiv.addClass("present");
            }

            // increment starting hour - checking time first, then incrementing
            date.add(1, "hour");
        }        
    }

    // call createScheduler based on page load
    // This is required before any other function because it creates the buttons that then listen for the clicks.
    $( window ).on("load", createScheduler());

    // page objects
    let saveButton = $(".saveBtn");
    let textBox = $(".text-box");
    let clearBtn = $(".clr-btn");

    // function to show to-dos
    function displayToDo() {
        // Get stored to-dos from localStorage
        for (let i = 0; i < 12; i++) {
            let storedCalList = localStorage.getItem("text" + i);
            $("#text" + i).text(storedCalList);
        }
    }

    // function to add to-dos
    function addText(event) {
        event.preventDefault();
        localStorage.setItem($(this)[0].previousElementSibling.id, $(this)[0].previousElementSibling.value);
    }

    // click event to save the text
    saveButton.click(addText);
    displayToDo();

    // clear scheduler
    clearBtn.on("click", function() {
        localStorage.clear();
        textBox.empty();
        location.reload();
    });
});