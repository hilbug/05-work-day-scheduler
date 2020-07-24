$(document).ready(function() {
    
    // moment date
    const todaysDate = moment();
    console.log(todaysDate.toString());
    
    // Today's date for jumbotron
    $("#currentDay").text(todaysDate.format("dddd | MMMM Do | YYYY"));
    console.log($("#currentDay").text(todaysDate.format("dddd | MMMM Do YYYY | hh:mm a")));

    // Hours for scheduler
    //const workHours = [8,9,10,11,12,13,14,15,16,17,18];

    // Function to create rows for schedule
    function createScheduler(date) {

        // Set start time at 8am
        date = moment(date).hour(8);

        for (let i = 0; i < 12; i++) {
            
            // Row: create div with class row 
            const rowDiv = $("<div>").addClass("row").attr("id", `row${i}`);

            // Hour: create div with classes col-1, time-block, hour for hour display
            const hourDiv = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(date.format("H a")).attr("id", `hour${i}`);
            
            // Text box: create div with classes col-10 for scheduler text area 
            const textDiv = $("<textarea>").addClass("col-10 time-block text-box save-block").attr("id", `text${i}`);
            
            // Save button: create div with classes co1-1 saveBtn for save button
            const saveDiv = $("<div>").addClass("col-1 d-flex align-items-center justify-content-center saveBtn save-block");
            let saveBtnIcon = $("<button>").addClass("btn fas fa-save fa-lg").attr("id", i);

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
        console.log("html created");
        
    }

    // page objects
    let rowDiv = $(".row");
    let saveBlock = $(".save-block");
    let saveButton = $(".fa-save");
    let textBox = $(".text-box");
    let clearBtn = $(".clr-btn");
    
    // Empty array for calendar to-dos
    let calList = [];

    // function to save to-do
    function storeToDo() {
        localStorage.setItem("calList", JSON.stringify(calList));
    }

    // function to parse to-do
    function displayToDo() {
        // Get stored to-dos from localStorage
        // Parsing the JSON string to an object
        let storedCalList = JSON.parse(localStorage.getItem("calList"));
    
        // If scores were retrieved from localStorage, update the scorelist array to it
        if (storedCalList !== null) {
            calList = storedCalList;
        }
    }

    // function to add to do text
    function addText(event) {
        event.preventDefault();

        // to save the text
        let saveTxt = event.target;
        let enteredText = $(this).find("textarea").val();
        console.log(enteredText);
        console.log("where's my text?");
        // let enteredArrayIndex = parseInt($(this).find(".text-box").attr("id)") - 8);
        
        storeToDo();
        displayToDo();
    }

    // click event on rowdiv to save the text
    saveButton.on("click", addText);

    // clear scheduler
    clearBtn.on("click", function() {
        localStorage.clear();
        textBox.empty();
    });

    // call createScheduler based on page load
    $( window ).on("load", createScheduler());
    console.log("window loaded");

    // button for saving 
    //saveButton.on("click", ...)
    // .matches a button - use this.textarea




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
    
    // Set interval to check the time. if it is a new time, render the page again

    // key is time value is contents of the text area
    //click using class
    // text area walking up and down the dom
    // .parent element- children - hour doclumn and text area child 1, value from that.
    
    
    
});