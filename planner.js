var date;
var eventDescription;
var entryID;

// function initCalendarGrid() {

// }

// function getDate() {

// }

// function displayDate(entryID) {

// }

function getDescription() {
  console.log("getDescription reached");
  eventDescription = document.getElementById('description').value;
  
  date = document.getElementById('dateSelect').value;
  date = +date;
  console.log(date);
  console.log(eventDescription);
    (function (){
      document.getElementById(date).innerHTML = date + "\t\t" + eventDescription;
      document.getElementById(date).className = "calendarCellSelected";
      console.log("inner func reached");
    })();

}

// function displayDescription(entryID) {

// }
