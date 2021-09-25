//object with an array of times and labels
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

//starts everything
function init() {
  createStructure();
  var currentDayEl = document.getElementById("currentDay");
  currentDayEl.textContent = moment().format("dddd, MMMM Do");
  colorRows();
  getStoredText();
}

//creates all elements inside the container div
function createStructure() {
  for (var j = 0; j < structureInfo.hours.length; j++) {
    $("<div>", { class: "row align-items-start" })
      .append(
        $(
          "<div class='col-sm-1 hour'>" +
            structureInfo.hours[j].label +
            "</div><div class='col-sm-10 text' data-time='" +
            structureInfo.hours[j].time +
            "'><textarea id='" +
            structureInfo.hours[j].time +
            "' data-text='" +
            structureInfo.hours[j].time +
            "'></textarea></div><div class='col-sm-1 save'><button type='submit' class='btn fas fa-save saveBtn'></button></div>"
        )
      )
      .appendTo($(".container"));
  }
  $(".saveBtn").on("click", storeStuff);
}

//adds colors to row based on current hour
function colorRows() {
  var hoursEl = document.querySelectorAll("[data-time]");
  // var currentHour = parseInt(moment().format("H"));
  var currentHour = 12;
  hoursEl.forEach((element) => {
    if (parseInt(element.dataset.time) === currentHour) {
      element.classList.add("present");
    } else if (parseInt(element.dataset.time) > currentHour) {
      element.classList.add("future");
    } else {
      element.classList.add("past");
    }
  });
}

//gets textbox content and stores it in local storage
function storeStuff() {
  var text = $(this).parent("div").parent("div").find("textarea").val().trim();
  var textId = $(this).parent("div").parent("div").find("textarea").get(0).id;
  localStorage.setItem(textId, text);
}

//gets local stored text and puts it in the textboxes
function getStoredText() {
  var textEl = document.querySelectorAll("[data-text]");
  textEl.forEach((element) => {
    var item = localStorage.getItem(element.id);
    element.textContent = item;
  });
}
init();