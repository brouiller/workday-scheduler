//document element variables
var currentDayEl = document.getElementById('currentDay');
var containerEl = $(".container");

//global variables
var currentHour = moment().format("H");
var hours = [];
var structureInfo = {
  hours: [
    { label: "9am", time: "9" },
    { label: "10am", time: "10" },
    { label: "11am", time: "11" },
    { label: "12am", time: "12" },
    { label: "1pm", time: "13" },
    { label: "2pm", time: "14" },
    { label: "3pm", time: "15" },
    { label: "4pm", time: "16" },
    { label: "5pm", time: "17" },
  ],
};

function init() {
    createStructure();
    currentDayEl.textContent = moment().format("dddd, MMMM Do");
    colorRows();
};

function createStructure(){
  for (var j = 0; j < structureInfo.hours.length; j++) {
    $("<div>", { class: "row align-items-center" })
      .append(
        $(
          "<div class='col hour align-self-center'>" +
            structureInfo.hours[j].label +
            "</div><div class='col-sm-8 text align-self-center' data-time='" + structureInfo.hours[j].time +"'><textarea></textarea></div><div class='col save align-self-center'><button type='submit' class='btn fas fa-save saveBtn'></button></div>"
        )).appendTo(containerEl);
  }
};

function colorRows() {
    var hoursEl = document.querySelectorAll("[data-time]");
    console.log(hoursEl);
    hoursEl.forEach(element => {
        console.log(element.attributes[1].value)
        console.log(currentHour)
        if (element.attributes[1].value == currentHour) {
            element.classList.add("present");
        } else if (element.attributes[1].value > currentHour) {
            element.classList.add("future");
        } else {
            element.classList.add("past");
        }
    });
    for (var i = 0; i < structureInfo.hours.length; i++){

    }
};

init();